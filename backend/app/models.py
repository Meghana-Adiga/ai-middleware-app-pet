"""
Defines Request and Response schema
@author: Meghana Adiga
"""

from pydantic import BaseModel, Field
from uuid import UUID
from typing import Optional, List, Dict, Any

class PromptRequest(BaseModel):
    prompt: str = Field(..., min_length=1)
    targetLanguage: str
    contextId: Optional[UUID] = None

class InsightResponse(BaseModel):
    id: int
    title: str
    content: str

class PaginationMetadata(BaseModel):
    page: int
    pageSize: int
    total: int

class SuccessResponse(BaseModel):
    status: str
    data: List[InsightResponse]
    pagination: PaginationMetadata

class ClarificationResponse(BaseModel):
    status: str
    message: str

class ErrorResponse(BaseModel):
    error: str
    message: str
    details: Optional[Dict[str, Any]] = None
