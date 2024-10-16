import GoogleProvider from 'next-auth/providers/google';
import MirahezeProvider from 'next-auth/providers/miraheze';
import FacebookProvider from 'next-auth/providers/facebook';

export default NuxtAuthHandler({
    providers: [
        GoogleProvider.default({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        MirahezeProvider.default({
            clientId: process.env.MIRAHEZE_ID,
            clientSecret: process.env.MIRAHEZE_SECRET,
        }),
        FacebookProvider.default({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
    ],
    // Additional NextAuth configuration options
});
