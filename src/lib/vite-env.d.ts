interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string;
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_ANON_KEY: string;
    readonly VITE_SUPABASE_SERVICE_ROLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}