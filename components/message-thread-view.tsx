/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3ETqm8cce2j
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"

export function MessageThreadView() {
  return (
      <Card className="p-6 space-y-4">
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage alt="Pilot Avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Pilot John</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">10:32 AM</span>
            </div>
            <Collapsible>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p>
                  Attention all crew, this is your captain speaking. We are about to embark on a journey to the
                  beautiful city of Paris. The weather is looking great and I expect a smooth flight. Please make sure
                  your seatbelts are fastened and your tray tables are in the upright position. Once we reach cruising
                  altitude, the cabin crew will be coming around with refreshments. If you have any questions or
                  concerns, please hesitate to let me know.
                </p>
                <div className="mt-2 flex items-center space-x-2">
                  <Button size="icon" variant="ghost">
                    <PlayIcon className="h-5 w-5" />
                  </Button>
                  <span className="text-sm text-gray-500 dark:text-gray-400">0:12 / 0:45</span>
                </div>
              </div>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  Show more
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage alt="Co-Pilot Avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>CP</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Co-Pilot Sarah</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">10:34 AM</span>
            </div>
            <Collapsible>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p>
                  Roger that, Captain. Preparing for takeoff. Ive double-checked the pre-flight checklist and
                  everything looks good to go. The weather radar is showing some light turbulence ahead, but nothing we
                  cant handle. Once we reach cruising altitude, Ill keep an eye on the instruments and let you know if
                  anything changes. In the meantime, lets get this bird in the air and on its way to Paris.
                </p>
                <div className="mt-2 flex items-center space-x-2">
                  <Button size="icon" variant="ghost">
                    <PlayIcon className="h-5 w-5" />
                  </Button>
                  <span className="text-sm text-gray-500 dark:text-gray-400">0:08 / 0:30</span>
                </div>
              </div>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  Show more
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage alt="Pilot Avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Pilot John</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">10:35 AM</span>
            </div>
            <Collapsible>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p>
                  Cabin crew, please prepare for takeoff. Ive just received clearance from air traffic control, and
                  were ready to depart. Make sure all passengers have their seatbelts fastened and their tray tables
                  are in the upright position. Once were airborne, Ill give you the all-clear to begin beverage and
                  snack service. Lets make this a smooth and enjoyable flight for everyone on board.
                </p>
                <div className="mt-2 flex items-center space-x-2">
                  <Button size="icon" variant="ghost">
                    <PlayIcon className="h-5 w-5" />
                  </Button>
                  <span className="text-sm text-gray-500 dark:text-gray-400">0:10 / 0:25</span>
                </div>
              </div>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  Show more
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>
      </Card>
  )
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}
