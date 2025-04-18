import type { ClientOAuth2, ClientOAuth2Options, ClientOAuth2RequestObject } from './ClientOAuth2';
export interface ClientOAuth2TokenData extends Record<string, string | undefined> {
    token_type?: string | undefined;
    access_token: string;
    refresh_token: string;
    id_token?: string;
    expires_in?: string;
    scope?: string | undefined;
    device_id?: string;
}
export declare class ClientOAuth2Token {
    readonly client: ClientOAuth2;
    readonly data: ClientOAuth2TokenData;
    readonly tokenType?: string;
    readonly accessToken: string;
    readonly refreshToken: string;
    readonly deviceId: string;
    private expires;
    constructor(client: ClientOAuth2, data: ClientOAuth2TokenData);
    sign(requestObject: ClientOAuth2RequestObject): ClientOAuth2RequestObject;
    refresh(opts?: ClientOAuth2Options): Promise<ClientOAuth2Token>;
    expired(): boolean;
}
