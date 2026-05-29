from flask import Blueprint, jsonify, request

auth_bp = Blueprint("auth", __name__, url_prefix="/api")

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json(silent=True) or {}
    username = data.get("username", "guest")
    return jsonify({
        "token": "demo-token-123",
        "user": {
            "username": username,
            "name": "Guest User",
            "role": "guest"
        }
    })

@auth_bp.route("/profile")
def profile():
    return jsonify({
        "profile": {
            "username": "guest",
            "name": "Guest User",
            "role": "guest",
            "email": "guest@example.com"
        }
    })
