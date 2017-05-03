import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Stories, Story, Props } from 'neutrino-preset-react-components/lib';
import { LazyLog, LazyStream, ScrollFollow } from './components/LazyLog';

const root = document.getElementById('root');
const logs = {
  TYPICAL: 'https://public-artifacts.taskcluster.net/5qB6Zqc0Tw2_wkKwHgGNGQ/0/public/logs/live_backing.log',
  MASSIVE: 'https://queue.taskcluster.net/v1/task/B8yyH1HORxKkQ9p1Sh0CFA/runs/0/artifacts/public/logs/live_backing.log',
  LOCAL_STREAM: 'http://localhost:4001',
  HTTP_403: 'https://firefox-ui-tests-dev.s3.amazonaws.com/forbidden.zzz',
  HTTP_404: 'https://queue.taskcluster.net/v1/task/LeDgoYUoSX623z484pRHKg/runs/0/artifacts/public/logs/foo.log',
  MISSING_CORS: 'https://queue.taskcluster.net/',
  BAD_URL: 'wat'
};

const load = () => render((
  <AppContainer>
    <Stories>
      <Story component={LazyLog}>
        <Props name="Typical Log" url={logs.TYPICAL} />
        <Props name="Typical Log, large lines" url={logs.TYPICAL} rowHeight={40} style={{ fontSize: 24 }} />
        <Props name="Typical, follow" url={logs.TYPICAL} follow={true} />
        <Props name="Typical, highlight L10" url={logs.TYPICAL} highlight={10} />
        <Props name="Typical, highlight L5-L15" url={logs.TYPICAL} highlight={[5, 15]} />
        <Props name="Massive Log, scroll to 500K" url={logs.MASSIVE} scrollToLine={500000} />
        <Props name="403 Error, Fixed dimensions" url={logs.HTTP_403} height={100} width={550} />
        <Props name="404 Error" url={logs.HTTP_404} />
        <Props name="Missing CORS headers" url={logs.MISSING_CORS} />
        <Props name="Generic error" url={logs.BAD_URL} />
      </Story>
      <Story component={LazyStream}>
        <Props name="Local Stream" url={logs.LOCAL_STREAM} />
        <Props name="Local Stream, scroll To 30" url={logs.LOCAL_STREAM} scrollToLine={30} />
        <Props name="Local Stream, follow" url={logs.LOCAL_STREAM} follow={true} />
      </Story>
      <Story component={ScrollFollow}>
        <Props name="Not following">
          {({ onScroll, follow }) => <LazyStream url={logs.LOCAL_STREAM} follow={follow} onScroll={onScroll} />}
        </Props>
        <Props name="Start following" startFollowing={true}>
          {({ onScroll, follow }) => <LazyStream url={logs.LOCAL_STREAM} follow={follow} onScroll={onScroll} />}
        </Props>
      </Story>
    </Stories>
  </AppContainer>
), root);

if (module.hot) {
  module.hot.accept('./components/LazyLog', load);
}

load();
