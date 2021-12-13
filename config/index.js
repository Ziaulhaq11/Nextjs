const dev = process.env.NODE_ENV !== 'production' //it returns false if it is production then below our server will be the site.com

export const server = dev ? "http://localhost:3000" : "https://mysitename.com"