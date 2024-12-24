import React from 'react'

const Feature = () => {
  return (
<div className="container mt-5">
  <div className="row">
    {/* Image Section */}
    <div className="col-12 col-md-6">
      <div className="mb-4">
        <div className="d-flex justify-content-between">
          <img src="image/red_shoes1.png" className="img-thumbnail" onclick="functio(this)" alt="Small Red Shoe 1" />
          <img src="image/red_shoes2.png" className="img-thumbnail" onclick="functio(this)" alt="Small Red Shoe 2" />
          <img src="image/red_shoes3.png" className="img-thumbnail" onclick="functio(this)" alt="Small Red Shoe 3" />
          <img src="image/red_shoes4.png" className="img-thumbnail" onclick="functio(this)" alt="Small Red Shoe 4" />
        </div>
      </div>
      <div className="text-center">
        <img src="file:///C:/Users/Lenovo/OneDrive/Documents/Shoes%20Websit/Shoes%20Websit/image/red_shoes3.png" id="imagebox" className="img-fluid" alt="Main Red Shoe Image" />
      </div>
    </div>
    {/* Text Section */}
    <div className="col-12 col-md-6">
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
        Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
        very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also 
        reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </p>
    </div>
  </div>
</div>
  

  )
}

export default Feature
