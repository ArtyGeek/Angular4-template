import { ApiServers } from 'app/config/shared/api-servers.enum';

export class ApiBaseUrl {
    static get(env): string {
        switch (env) {
            case ApiServers.prod: {
                return 'http://path-to-prod-server/api/';
            }
            case ApiServers.test: {
                return 'http://path-to-test-server/api/';
            }
            case ApiServers.dev: {
                return 'http://path-to-dev-server/api/';
            }
        }
    }
}
