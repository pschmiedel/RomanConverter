from flask import jsonify

class BadRequest(Exception):
  status_code = 400
  message = 'Bad Request'
  
  def __init__(self, message=None):
    Exception.__init__(self)
    if message is not None:
      self.message = message
    
  def to_dict(self):
    return { 'message': self.message }
