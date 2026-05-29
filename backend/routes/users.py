from flask import Blueprint, jsonify, abort
from models.database import get_all_users, get_user_by_id

users_bp = Blueprint("users", __name__, url_prefix="/api")


@users_bp.route("/users")
def list_users():
    return jsonify({"users": get_all_users()})


@users_bp.route("/users/<int:user_id>")
def user_detail(user_id):
    user = get_user_by_id(user_id)
    if user is None:
        abort(404, description="User not found")
    return jsonify(user)
