import GoogleProvider from 'next-auth/providers/google';
import WikimediaProvider from 'next-auth/providers/wikimedia';
import FacebookProvider from 'next-auth/providers/facebook';
import { NuxtAuthHandler } from '#auth';

export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error Use .default here for it to work during SSR.
        GoogleProvider.default({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        WikimediaProvider.default({
            clientId: process.env.MIRAHEZE_ID,
            clientSecret: process.env.MIRAHEZE_SECRET,
        }),
        {
            id: "miraheze",
            name: "Miraheze",
            type: "oauth",
            token: "https://meta.miraheze.org/w/rest.php/oauth2/access_token",
            userinfo: "https://meta.miraheze.org/w/rest.php/oauth2/resource/profile",
            authorization: {
              url: "https://meta.miraheze.org/w/rest.php/oauth2/authorize",
              params: { scope: "" },
            }
        },
        FacebookProvider.default({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
    ],
    // Additional NextAuth configuration options
});
