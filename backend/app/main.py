"""
API entry point
"""

from fastapi import FastAPI, HTTPException, Query, status
from typing import Union
from fastapi.middleware.cors import CORSMiddleware

from .models import *
from .data import Constants
from .helpers import paginate, total_count

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/api/ai_prompt", response_model=Union[SuccessResponse, ClarificationResponse], 
          responses={400: {"model": ErrorResponse}},)
def submit_prompt(request: PromptRequest, page: int = Query(1)):

    #step 1: language validation
    if request.targetLanguage not in Constants.SUPPORTED_LANGUAGES:
        response = ErrorResponse(error=Constants.LANGUAGE_ERROR_STATUS, 
                                 message="Target language is not supported",
                                 details={"allowedLanguages": Constants.SUPPORTED_LANGUAGES})
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, 
                            detail=response.model_dump())
    
    # step 2: clarification logic
    if len(request.prompt.strip()) < Constants.CLARIFICATION_MIN_PROMPT_LENGTH:
        return ClarificationResponse(status=Constants.CLARIFICATION_STATUS, 
                                     message="Please provide more details. A minimum of 5 characters are " \
                                     "required in the prompt input")
    
    # step 3: handle success use case
    insights = paginate(page)
    return SuccessResponse(status=Constants.SUCCESS_STATUS, 
                           data=insights,
                           pagination=PaginationMetadata(page=page, 
                                                         pageSize=10, 
                                                         total=total_count()))