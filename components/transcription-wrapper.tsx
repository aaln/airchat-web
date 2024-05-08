'use client';
import React, { useState } from 'react';

export default function TranscriptionWrapper({ message, charLimit }) {
  const [isExpanded, setIsExpanded] = useState(false);

  let transcriptionText = message?.transcription?.transcriptionText;
  if (!transcriptionText) return null;
  if (!transcriptionText.includes('.') && !transcriptionText.includes('?')) {
    transcriptionText = transcriptionText + '.';
  }
  const sentences =
    transcriptionText.match(/[^\.!\?]+[\.!\?]+|[^\.!\?\s]+/g) || [];

  const sentenceGroups = sentences.reduce((acc, sentence, index) => {
    if (index % 3 === 0) acc.push([]);
    acc[acc.length - 1].push(sentence.trim());
    return acc;
  }, []);

  let isTruncated = false;
  let displayText = transcriptionText;

  if (charLimit && !isExpanded) {
    if (transcriptionText.length > charLimit) {
      displayText = transcriptionText.substring(0, charLimit) + '...';
      isTruncated = true;
    }
  } else {
    isTruncated = sentenceGroups.length > 3 && !isExpanded;
  }

  const renderTranscription = (message, displayText) => {
    const visibleSentenceGroups =
      isExpanded || sentenceGroups.length <= 3
        ? sentenceGroups
        : sentenceGroups.slice(0, 3);
    const textToDisplay = isExpanded ? transcriptionText : displayText;

    return (
      <>
        {isExpanded ? (
          visibleSentenceGroups.map((group, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {group.map((sentence, sentenceIndex) => {
                const words = sentence.split(' ');
                return (
                  <React.Fragment key={sentenceIndex}>
                    {words.map((word, wordIndex) => {
                      const isMentionedUser = message?.mentionedUsersList?.some(
                        (u) => u.name === word
                      );
                      return (
                        <React.Fragment key={wordIndex}>
                          {isMentionedUser ? (
                            <span className='text-blue-600'>{word}</span>
                          ) : (
                            word
                          )}
                          {wordIndex < words.length - 1 ? ' ' : ''}
                        </React.Fragment>
                      );
                    })}
                    {sentenceIndex < group.length - 1 ? ' ' : ''}
                  </React.Fragment>
                );
              })}
              {groupIndex < visibleSentenceGroups.length - 1 && (
                <div>&nbsp;</div>
              )}
            </React.Fragment>
          ))
        ) : (
          <span>{textToDisplay}</span>
        )}
      </>
    );
  };

  return (
    <div
      className={`relative transition-opacity duration-500 ease-in-out ${
        isExpanded || !isTruncated
          ? 'opacity-100'
          : 'opacity-90 hover:opacity-100'
      }`}
    >
      {renderTranscription(message, displayText)}
      {isTruncated && (
        <div
          className='absolute text-blue-600 cursor-pointer w-56 py-1 rounded-full flex justify-center items-center bg-white -bottom-9 left-1/2 transform -translate-x-1/2'
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(true);
          }}
        >
          Read more
        </div>
      )}
    </div>
  );
}
