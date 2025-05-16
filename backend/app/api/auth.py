from flask import Blueprint, request, jsonify, current_app

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/post-signup', methods=['POST'])
def post_signup():
    supabase = current_app.config["SUPABASE"]

    data = request.json
    email = data.get('email')

    if not email:
        return jsonify({"error": "Email required"}), 400

    # Verify the user from Supabase
    user_resp = supabase.auth.admin.get_user_by_email(email)

    if user_resp.error or not user_resp.user:
        return jsonify({"error": "User not found or not verified"}), 404

    # TODO: Add post user logic (like customizing profile, etc)