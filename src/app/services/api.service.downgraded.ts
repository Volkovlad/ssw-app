export function apiServiceFactory($injector: any) {
    return $injector.get('ApiService');
}

export const apiServiceProvider = {
    provide: 'ApiService',
    deps: ['$injector'],
    useFactory: apiServiceFactory
};
