module.exports = {
  apps: [
    {
      name: 'agntix-nextjs',
      script: 'npm start',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      ignore_watch: ['node_modules', '.next/cache', 'logs'],
      listen_timeout: 3000,
      kill_timeout: 5000
    }
  ]
};
