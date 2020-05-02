from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

value = {
    'text': 'Test 1 2 3'
}

@app.route('/')
def index():
    return render_template('index1_input.html', **value)

@socketio.on('connect')
def test_connect():
    emit('after connect',  {'data':'Connected!'})

@socketio.on('chat')
def value_changed(message):
    value['text'] = message['data']
    emit('update value', message, broadcast=True)
    print(message['data'], message['opsi'])

if __name__ == '__main__':
    socketio.run(app, debug=True)