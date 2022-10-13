import React, { useEffect } from 'react'
import UserPanels from '../../components/UserPanel/UserPanels'

export default function Main() {

	return (
		<UserPanels>
			<div className="background">
				<h2 className="title">Bienvenido! </h2>
				<div className=" rounded-xl bg-white p-5">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
						quibusdam, nemo, eligendi dicta commodi nobis eaque iure alias,
						laudantium a enim nam. Doloribus commodi nostrum suscipit adipisci
						itaque sit ad quos! Cum, culpa. Praesentium cum voluptates,
						exercitationem non magni laborum optio odio. Unde iusto voluptatem
						esse optio reprehenderit, aliquid assumenda.
					</p>

					<h2 className="mt-6">Pendientes</h2>
					<ul className="my-7 ml-7">
						<li>item 1</li>
						<li>item 2</li>
						<li>item 3</li>
						<li>item 4</li>
					</ul>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
						quisquam consequuntur placeat earum velit ullam aut fugiat at
						molestiae dolorum beatae, suscipit, ab modi. Repellat minus ducimus
						placeat similique asperiores magnam, odit vero laboriosam illum.
						Repellat beatae perferendis, corporis cupiditate illum voluptate
						blanditiis adipisci quaerat, nemo animi assumenda eum fuga libero
						minus exercitationem, dicta consequuntur atque quasi. Magnam harum,
						placeat suscipit architecto obcaecati maxime quidem nostrum eveniet!
						Hic, ratione eum!
					</p>
				</div>
			</div>
		</UserPanels>
	)
}
