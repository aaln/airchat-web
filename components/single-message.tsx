"use client";

import { useRef } from 'react';
import 'react-medium-image-zoom/dist/styles.css';
import { RenderMessage } from './render-message';



export function SingleMessage({ message }) {
  // const [selectedDetails, setSelectedDetails] = useState(null);
  // const { accessToken } = useAuth();
  const messageRef = useRef(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(async (entry) => {
//           if (entry.isIntersecting) {
//             if(!threadDetails?.length) {
//                 const url = `/api/thread/details?id=${item?.messageThread?.referenceRecordingId}&token=${accessToken}`
//                 const response = await fetch(url);
//                 const result = await response.json();
//                 setThreadDetails(result.messageThreadDetailsList);
//             }
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (itemRef.current) {
//       observer.observe(itemRef.current);
//     }

//     return () => {
//       if (itemRef.current) {
//         observer.unobserve(itemRef.current);
//       }
//     };
//   }, []);

  return (
    <div ref={messageRef} className="relative flex flex-col gap-14 pt-6 w-full justify-center max-w-2xl">
      <RenderMessage message={message} charLimit={280} />
       {/* {
        threadDetails?.length > 1 && 
        <div className="ml-16 flex flex-col gap-2">
            <div>
                {threadDetails?.length} Responses
            </div>
            <div className="flex flex-row flex-wrap gap-2 items-center">
                {
                    threadDetails?.map((detail, index) => (
                        <Avatar 
                            className="cursor-pointer hover:scale-110 hover:border hover:border-gray-300 transition-transform duration-300"
                            onClick={() => {
                                setSelectedDetails(detail);
                            }}
                            key={index}
                        >
                            <AvatarImage src={`${airchatCDNUrl}/${detail?.firstMessage?.fromUser?.avatar}`} alt={detail?.firstMessage?.fromUser?.name} />
                            <AvatarFallback delayMs={600}>{detail?.firstMessage?.fromUser?.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    ))
                }
            </div>
        </div>
      } */}
    </div>
  );
}
