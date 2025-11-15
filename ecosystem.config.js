module.exports = {
  apps: [
    {
      name: 'agntix-nextjs',
      script: 'npm start',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=512'
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      ignore_watch: ['node_modules', '.next/cache', 'logs'],
      listen_timeout: 3000,
      kill_timeout: 5000
    }
  ]
};
