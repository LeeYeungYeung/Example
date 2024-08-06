import React from 'react';

export const metadata = {
  title: 'forms template',
  description: 'nextjs demo learn',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <div className="content">
          <div>
            <div className="header">
              <h1 className="">
                设置
              </h1>
              <p className="">管理你的账户设置并设置电子邮件选项</p>
            </div>
            <hr />
            <div>
              <aside>

              </aside>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
