import useSWR from 'swr';
import styles from './messages.module.scss';
import { joinClasses } from '@/helpers/css  ';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Messages = () => {
  const { data, error, isLoading } = useSWR('/api/messages', fetcher);

  if (error) return null;
  if (isLoading)
    return <div className="text-center py-5">loading messages...</div>;

  return (
    <div className={joinClasses([styles.messages, 'container'])} id="messages">
      <div
        className={joinClasses([
          styles.messagesContainer,
          'row flex-nowrap flex-lg-wrap overflow-auto overflow-lg-none justify-content-lg-center',
        ])}
      >
        {data.map(
          (message: { answer: string; timeStamp: string }, index: number) => (
            <div className="col-9 col-md-5 col-lg-3 mb-md-4 " key={index}>
              <div
                className={joinClasses([
                  styles.messageCard,
                  'card border-0 h-100',
                ])}
              >
                <div>{message.answer}</div>
                <div className="fst-italic fw-bold small mt-3">
                  {message.timeStamp}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Messages;
