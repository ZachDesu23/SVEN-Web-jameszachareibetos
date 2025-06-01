## Tech Stack Used

- **Laravel**
- **React** with **Vite**
- **Inertia.js** bridging laravel and react
- **SQLite**

# Clone the repository
git clone https://github.com/your-username/your-project-name.git
cd your-project-name

# Install PHP dependencies
composer install

# Install JS dependencies
npm install or npm i

# Copy environment file and generate key
cp .env.example .env
php artisan key:generate

# Create SQLite database file
touch database/database.sqlite

# Get the full absolute path to SQLite DB and update .env
DB_PATH=$(realpath database/database.sqlite)
sed -i "s|^DB_CONNECTION=.*|DB_CONNECTION=sqlite|" .env
sed -i "s|^DB_DATABASE=.*|DB_DATABASE=$DB_PATH|" .env

# Run migrations
php artisan migrate

# Start Laravel server
php artisan serve &
# Start Vite (React frontend)
npm run dev
