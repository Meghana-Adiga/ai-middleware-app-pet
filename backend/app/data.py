"""
Dummy data for insights and other data for backend
@author: Meghana Adiga
"""

class Constants:
    SUPPORTED_LANGUAGES = ["en", "de", "fr"]
    PAGE_SIZE = 10
    CLARIFICATION_MIN_PROMPT_LENGTH = 5
    LANGUAGE_ERROR_STATUS = "INVALID_LANGUAGE"
    CLARIFICATION_STATUS = "NEEDS_CLARIFICATION"
    SUCCESS_STATUS = "SUCCESS"

# Replace with External AI/LLM insights, 
dummy_insights = list()
for i in range(1, 45):
    dummy_insights.append({"id": i, "title": f"Insight {i}", 
                           "content": f"Dummy content for insight {i}"})
    
