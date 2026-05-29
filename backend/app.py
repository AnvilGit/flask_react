from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from routes.auth import auth_bp
from routes.users import users_bp

app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS so the frontend dev server can request API data from a different port.
CORS(app)

# Register route blueprints from the backend modules.
app.register_blueprint(users_bp)
app.register_blueprint(auth_bp)


@app.route('/')
def index():
    return "Welcome to the Flask React Demo API!"


@app.route('/about')
def about():
    return "This backend provides user and authentication data for the React frontend."


@app.route('/api/message')
def get_message():
    return jsonify({
        "message": "Welcome to the Flask React Demo!",
        "appName": app.config["APP_NAME"],
        "version": app.config["API_VERSION"],
        "status": "online"
    })


if __name__ == "__main__":
    app.run(debug=app.config["DEBUG"])
