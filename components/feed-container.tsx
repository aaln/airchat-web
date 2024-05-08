import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ActivityContainer } from './activity-container';
import { MessageFeed } from './feed/message-feed';
import { RealtimeSearch } from './realtime-search';

export async function FeedContainer() {
  return (
    <div>
      <Tabs className='w-full min-h-[60px]' defaultValue='threads'>
        <TabsList className='px-2 min-h-[80px] grid w-full grid-cols-3'>
          <TabsTrigger className='min-h-[60px]' value='threads'>
            Relevant Threads
          </TabsTrigger>
          <TabsTrigger className='min-h-[60px]' value='search'>
            Search
          </TabsTrigger>
          <TabsTrigger className='min-h-[60px]' value='activity'>
            Activity
          </TabsTrigger>
        </TabsList>
        <TabsContent value='threads'>
          <MessageFeed />
        </TabsContent>
        <TabsContent value='search'>
          <RealtimeSearch />
        </TabsContent>
        <TabsContent value='activity'>
          <ActivityContainer />
        </TabsContent>
      </Tabs>
    </div>
  );
}
