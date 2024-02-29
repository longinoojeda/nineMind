
export default function Project() {
	return (
	  <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 px-4 md:px-8">
		{/* Título principal */}
		<h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
		  Project Overview
		</h1>
		{/* Descripción del proyecto */}
		<p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl text-center">
		  Welcome to the project overview page! Our platform aims to provide a
		  seamless online learning experience through on-demand video courses. We
		  prioritize simplicity and scalability, focusing on efficient
		  communication between distributed services and leveraging AWS for
		  content storage and delivery.
		</p>
		{/* Sección de características clave */}
		<div className="max-w-3xl">
		  <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">
			Key Features
		  </h2>
		  {/* Lista de características */}
		  <ul className="list-disc pl-6 flex flex-col gap-4">
			<li>
			  <strong>Microservices architecture:</strong> Our platform is built
			  using a microservices architecture, allowing for scalability and
			  modularity in development.
			</li>
			<li>
			  <strong>Efficient communication with gRPC:</strong> We utilize gRPC
			  for communication between our distributed services, ensuring fast
			  and reliable data exchange.
			</li>
			<li>
			  <strong>Go backend:</strong> The backend of our platform is
			  developed in Go, chosen for its performance and suitability for
			  cloud-native applications.
			</li>
			<li>
			  <strong>Simple user experience:</strong> Users can access our
			  platform without the need for registration or payments, focusing
			  solely on their learning experience.
			</li>
			<li>
			  <strong>AWS integration:</strong> We leverage Amazon Web Services
			  (AWS) for content storage and distribution, ensuring reliable and
			  scalable delivery of video courses.
			</li>
			<li>
			  <strong>Next.js frontend:</strong> Our frontend is built with
			  Next.js, providing agility in development and server-side rendering
			  capabilities for improved performance.
			</li>
			<li>
			  <strong>Monthly development milestones:</strong> We set monthly
			  milestones to ensure continuous progress and timely delivery of
			  features.
			</li>
		  </ul>
		</div>
	  </section>
	);
  }