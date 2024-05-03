"use client";
import { RenderMessage } from './render-message';



export function SingleMessage({ message }) {
  return (
    <div className="relative flex flex-col gap-14 pt-6 w-full justify-center max-w-2xl">
      <RenderMessage message={message} charLimit={280} />
       
    </div>
  );
}
