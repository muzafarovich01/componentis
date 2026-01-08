import './App.css'
import Card from './abs/card/card'
import Block from './abs/block/block'
import img1 from "/public/img1.png"
import img2 from "/public/img2.png"

function App() {
  return (
    <div className='parent'>
      <p className='kkk'>User Card</p>
      <div className="cards">
        <Card rasim={img1} name="Emily Johnson" ish="Product Manager" soxa="Product Development" />
        <Card rasim={img1} name="Emily Johnson" ish="Product Manager" soxa="Product Development" />
        <Card rasim={img1} name="Emily Johnson" ish="Product Manager" soxa="Product Development" />
        <Card rasim={img1} name="Emily Johnson" ish="Product Manager" soxa="Product Development" />
        <Card rasim={img1} name="Emily Johnson" ish="Product Manager" soxa="Product Development" />
        <Card rasim={img1} name="Emily Johnson" ish="Product Manager" soxa="Product Development" />
        <Card rasim={img1} name="Emily Johnson" ish="Product Manager" soxa="Product Development" />
        <Card rasim={img1} name="Emily Johnson" ish="Product Manager" soxa="Product Development" />
      </div>
      <p className='kkk'>Info Card</p>
      <div className="blocks">
        <Block rasim={img2} title="Unraveling the Mysteries of the Ocean" text="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. " btn="Read now"/>
        <Block rasim={img2} title="Unraveling the Mysteries of the Ocean" text="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. " btn="Read now"/>
        <Block rasim={img2} title="Unraveling the Mysteries of the Ocean" text="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. " btn="Read now"/>
        <Block rasim={img2} title="Unraveling the Mysteries of the Ocean" text="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. " btn="Read now"/>
        <Block rasim={img2} title="Unraveling the Mysteries of the Ocean" text="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. " btn="Read now"/>
      </div>
    </div>
  )
}

export default App
