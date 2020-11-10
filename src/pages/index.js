import React from "react"
// import { Link } from "gatsby"
// import profilepic from '../images/profilepic1.JPG'
// import profilepic2 from '../images/profilepic2.jpeg'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className='body'>
      <section className='top-container'>
        <div className='introduction-container'>
          <h1 className='introduction'>Hi, I'm Bill.</h1>
          <h3 className='introduction-tag'> A Software Engineer based in Denver, CO.</h3>
        </div>
        <div className='overlap-img'>
          {/* <img src={`${profilepic}`} alt='headshot' className='profile-pic'></img> */}
        </div>
      </section>
      <section className='bottom-container'>
        <div className='overlap-img2'>
          {/* <img src={`${profilepic2}`} alt='headshot2' className='profile-pic2'></img> */}
        </div>
        <section className='aboutme-container'>
        <h3 className='about-me-title'>About me</h3>
        <hr></hr>
        <p className='about-me-text'>
          Warp jolly boat Jack Ketch gally scallywag Shiver me timbers main sheet capstan skysail ballast. Yellow Jack keelhaul clap of thunder skysail nipperkin driver prow interloper gabion furl. Scuttle yo-ho-ho black spot hang the jib maroon reef sails gangplank clap of thunder hands prow.
          Quarter pink topgallant rope's end snow knave clipper cutlass jack mizzenmast. Nelsons folly killick starboard lugger lookout reef Sail ho topgallant run a rig me. Measured fer yer chains hornswaggle warp pink Yellow Jack Pirate Round yo-ho-ho scallywag stern schooner.
          Landlubber or just lubber grog blossom Pirate Round weigh anchor topmast Admiral of the Black rutters Blimey salmagundi hulk. Mizzenmast topgallant man-of-war Plate Fleet Privateer fore grapple ahoy American Main aft. Landlubber or just lubber cackle fruit maroon heave down galleon aft topsail cable bilge water spirits.
        </p> 
      </section>
      </section>
      <footer>2020 Bill Wilke. All Rights reserved.</footer>
    </section>
  </Layout>
)

export default IndexPage
