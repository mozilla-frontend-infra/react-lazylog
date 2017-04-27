import React from 'react';
import { render, Stories, Story, Props } from 'neutrino-preset-react-components/lib';
import { LazyLog } from './components/LazyLog';

document.body.style.margin = 0;
document.body.style.height = '100vh';
document.body.style.width = '100vw';

const Logs = {
  TYPICAL: 'https://public-artifacts.taskcluster.net/5qB6Zqc0Tw2_wkKwHgGNGQ/0/public/logs/live_backing.log',
  MASSIVE: 'https://queue.taskcluster.net/v1/task/B8yyH1HORxKkQ9p1Sh0CFA/runs/0/artifacts/public/logs/live_backing.log',
  LOCAL_STREAM: 'http://localhost:3000',
  HTTP_403: 'https://firefox-ui-tests-dev.s3.amazonaws.com/forbidden.zzz',
  HTTP_404: 'https://queue.taskcluster.net/v1/task/LeDgoYUoSX623z484pRHKg/runs/0/artifacts/public/logs/foo.log',
  MISSING_CORS: 'https://queue.taskcluster.net/',
  BAD_URL: 'wat'
};

render((
  <Stories>
    <Story component={LazyLog}>
      <Props name="Standard Log" url={Logs.TYPICAL} />
      <Props name="Standard Log, Follow" url={Logs.TYPICAL} followUntilScroll={true} />
      <Props name="Standard Log, Highlight L10" url={Logs.TYPICAL} highlight={10} />
      <Props name="Standard Log, Highlight L5-L15" url={Logs.TYPICAL} highlight={[5, 15]} />
      <Props name="Massive Log" url={Logs.MASSIVE} />
      <Props name="Massive Log, Scroll to 500K" url={Logs.MASSIVE} scrollToLine={500000} />
      <Props name="Local Stream" url={Logs.LOCAL_STREAM} streaming={true} />
      <Props name="Local Stream, Scroll To 30" url={Logs.LOCAL_STREAM} streaming={true} scrollToLine={30} />
      <Props name="Local Stream, Follow" url={Logs.LOCAL_STREAM} streaming={true} followUntilScroll={true} />
      <Props name="403 Error" url={Logs.HTTP_403} />
      <Props name="404 Error" url={Logs.HTTP_404} />
      <Props name="Missing CORS headers" url={Logs.MISSING_CORS} />
      <Props name="Generic Error" url={Logs.BAD_URL} />
    </Story>
  </Stories>
), document.getElementById('root'));