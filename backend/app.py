import sys
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
from BadRequest import BadRequest
from roman import to_roman
from primes import is_prime

app = Flask(__name__)
CORS(app)

@app.route('/')
def root():
  return app.send_static_file('index.html')
	
#@app.route('/static/<path:path>')
#def send_static(path):
#  return send_from_directory('', path)
  
@app.route('/api/roman/<int:x>')
def get_roman(x):
	if x < 1 or x > 3999:
		raise BadRequest("%d: Invalid number. Please provide a number between 1 and 3999." % x)
		
	return jsonify({ 
		'arabic': x, 
		'roman': to_roman(x), 
		'is_prime': is_prime(x)
	})

@app.route('/api/roman/<x>')
def not_a_number(x):
  raise BadRequest("'%s': Not a number. Please provide a number between 1 and 3999." % x)
  
@app.errorhandler(BadRequest)
def handle_bad_request(error):
	response = jsonify(error.to_dict())
	response.status_code = error.status_code
	return response