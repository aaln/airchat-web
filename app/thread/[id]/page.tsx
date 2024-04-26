import ThreadContainer from "@/components/thread-container";

export default function Page({ params: { id } }) {

  return (
        
        <ThreadContainer threadId={id} />
      
  );
}
