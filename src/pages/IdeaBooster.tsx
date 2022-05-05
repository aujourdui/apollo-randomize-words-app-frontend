import { useQuery, NetworkStatus } from "@apollo/client";

import { GET_WORDS } from "apollo/query";

import DarkMode from "components/features/DarkMode";
import Title from "components/common/Title";
import WordList from "components/ideaBooster/WordList/WordList";
import Refetch from "components/ideaBooster/Refetch/Refetch";
import CreateStory from "components/ideaBooster/CreateStory/CreateStory";

const IdeaBooster: any = () => {
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_WORDS, {
    notifyOnNetworkStatusChange: true,
  });

  if (!data) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (networkStatus === NetworkStatus.refetch) return "Refetching!";
  if (loading) return null;

  const randomNum = () => {
    return Math.floor(Math.random() * 12);
  };
  const handleRefetch = () => {
    refetch();
  };

  const firstWord = data.words[randomNum()].word;
  const secondWord = data.words[randomNum()].word;

  return (
    <>
      <Title>IdeaBooster</Title>
      <DarkMode />
      <WordList firstWord={firstWord} secondWord={secondWord} />
      <Refetch handleRefetch={handleRefetch} />
      <CreateStory firstWord={firstWord} secondWord={secondWord} />
    </>
  );
};

export default IdeaBooster;
