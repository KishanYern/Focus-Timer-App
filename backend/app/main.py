from flask import Flask
from config import Config
from supabase import create_client

def create_app():
    app = Flask(__name__)

    # Supabase client
    supabase = create_client(
        Config.SUPABASE_URL,
        Config.SUPABASE_SERVICE_ROLE_KEY
    )

    # Import and register blueprints
    from api.auth import auth_bp

    app.register_blueprint(auth_bp, url_prefix='/api/auth')

    # Inject Supabase instance into app
    app.config["SUPABASE"] = supabase

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
