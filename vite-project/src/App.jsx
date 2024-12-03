import './App.css'
import PropsCard1 from './PropsCard1'
import PropsCard2 from './PropsCard2'
import PropsCard3 from './PropsCard3'
import PropsCard4 from './PropsCard4'
import withConditionalCard from './withConditionalCard'
import SimpleCard from './SimpleCard'

function App() {
  const cardData = {title: "some title3", content: "some content3", author: "some author3"};
  const cardDataArrays = [
    {id: 0, title: "some title3-1", content: "some content3-1", author: "some author3-1"},
    {id: 1, title: "some title3-2", content: "some content3-2", author: "some author3-2"}
  ];

  const ConditionalSimpleCard = withConditionalCard(SimpleCard);

  return (
    <>
      <PropsCard1 title="some title1" content="some content1" author="soem author1" />
      <PropsCard2 title="some title2" content="some content2" author="soem author2" />
      
      <PropsCard3 />
      <PropsCard3 {...cardData} />
      {cardDataArrays.map(cardDataArray => <PropsCard3 key={cardDataArray.id} {...cardDataArray} />)}

      <PropsCard4 title="some title4">
        <ul>
          <li>li 1</li>
          <li>li 2</li>
          <li>li 3</li>
        </ul>
      </PropsCard4>

      <ConditionalSimpleCard title="some title5" content="some content5" disabled={false} />
      <ConditionalSimpleCard title="some title5" content="some content5" disabled={true} />


    </>
  )
}

export default App
