declare namespace NodeJS {
  /** Merge declaration with `process` in order to override the global-scoped env. */
  export interface ProcessEnv {
    /**
     * Built-in environment variable.
     * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
     */
    readonly NG_APP_ENV: string;

    // Add your environment variables below
    readonly NG_APP_GTAG_TRACKING_ID: string;

    readonly NG_APP_ENVIRONMENT: string;

  }
}
