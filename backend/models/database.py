from .user import User

# In-memory demo database.
IN_MEMORY_DB = {
    "users": [
        User(1, "Alice Johnson", "alice.johnson@example.com", "Marketing Manager", "Marketing", "active"),
        User(2, "Bob Lee", "bob.lee@example.com", "Product Designer", "Product", "active"),
        User(3, "Charlie Kim", "charlie.kim@example.com", "Software Engineer", "Engineering", "active"),
        User(4, "Dana Scott", "dana.scott@example.com", "Customer Success Lead", "Support", "away"),
        User(5, "Evan Patel", "evan.patel@example.com", "Finance Analyst", "Finance", "active"),
    ]
}


def get_all_users():
    return [user.to_dict() for user in IN_MEMORY_DB["users"]]


def get_user_by_id(user_id):
    return next((user.to_dict() for user in IN_MEMORY_DB["users"] if user.id == user_id), None)
