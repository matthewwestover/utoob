import React from 'react';
import { Header, Image } from 'semantic-ui-react';

const Home = () => (
  <div>
    <Header as="h1" textAlign="center" icon>
      <Image src={`https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1546909200&Signature=CGX0fIpxcwKnunygRUi6~XtywN5cWlPvPbE6LwbsQ4vkThCZc2QnS8lFFSSUTzVt9orE2QcSp2QKmNGIkf2bG8aZe3g8nuZfObMw~LCSRceuozouSImDuS7vh6wfmNnQKNWOCX~YkwIPxMrZcBCRFm-fkaPG6yLbMZ06KAtw3JY_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA`} name="video" circular />
      <br />
      Welcome to UToob.
      <Header.Subheader as="h3" textAlign="center">The Best YouTube Knockoff Ever.</Header.Subheader>
    </Header>
  </div>
)

export default Home;