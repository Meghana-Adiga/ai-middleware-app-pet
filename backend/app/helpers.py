"""
Defines all helpers and backend business logic
@author: Meghana Adiga
"""

from .data import dummy_insights, Constants
from .models import InsightResponse

def total_count():
    return len(dummy_insights)

def paginate(page: int):
    start = (page - 1) * Constants.PAGE_SIZE
    end = start + Constants.PAGE_SIZE
    return [InsightResponse(**item) for item in dummy_insights[start:end]]