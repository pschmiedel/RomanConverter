import pytest
from app import app

import json

@pytest.fixture
def client():
  app.config['TESTING'] = True
  client = app.test_client()
  yield client
  
def test_1(client):
  rv = client.get('/api/roman/1')
  json_data = json.loads(rv.get_data(as_text=True))
  assert json_data['roman'] == 'I'
  
def test_1984(client):
  rv = client.get('/api/roman/1984')
  json_data = json.loads(rv.get_data(as_text=True))
  assert json_data['roman'] == 'MCMLXXXIV'

def test_out_of_range(client):
  rv = client.get('/api/roman/4000')
  assert rv.status_code == 400
  json_data = json.loads(rv.get_data(as_text=True))
  assert json_data['error']
  
def test_non_numeric(client):
  rv = client.get('/api/roman/abc')
  assert rv.status_code == 404
