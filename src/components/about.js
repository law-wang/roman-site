import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import "../styles/about.scss"
import Tracklist from "./tracklist"

const BlogFeatured = () => {

    const closeAbout = () => {
        const aboutBlock = document.querySelector("#aboutblock")
        aboutBlock.classList.remove('about-show')
    }

    // Clock display ONLY
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID)
        }
    })
    function tick() {
        setTime(new Date());
    }

    // Custom greeting ONLY
    const hour = new Date().getHours()
    let greetingText = ""
    switch (hour) {
        case 0:
            greetingText = "The waves come after midnight."
            break;
        case 1:
            greetingText = "Let's fall asleep to a revolution, then wake up next to a sad excuse."
            break;
        case 2:
            greetingText = "I got all I need, in a world of doubt. We got our champagne dreams, in an endless drought."
            break;
        case 3:
            greetingText = "The lies I weave are all so intricate."
            break;
        case 4:
            greetingText = "We could follow the sparks, I'll drive."
            break;
        case 5:
            greetingText = "Don't you know there's a part of me that longs to go."
            break;
        case 6:
            greetingText = "In my darkest hours I stumbled on a secret power."
            break;
        case 7:
            greetingText = "Turn around and you’ll see what I see."
            break;
        case 8:
            greetingText = "To be honest, what I liked, were the things I didn’t know."
            break;
        case 9:
            greetingText = "Would you believe me now, if I say I got caught up in a wave, almost gave it away."
            break;
        case 10:
            greetingText = "But I'm still not sure if fear's a rival or close relative to truth."
            break;
        case 11:
            greetingText = "Hang your head low in the glow of the vending machine I'm not dying."
            break;
        case 12:
            greetingText = "There's no going back against this California feeling."
            break;
        case 13:
            greetingText = "I guess you win some and lose some, 'long as the outcome's income. I want it all, and then some."
            break;
        case 14:
            greetingText = "It’s a train wreck, but I won’t crash it."
            break;
        case 15:
            greetingText = "But here we are, after all the messes and confessions, to the stars."
            break;
        case 16:
            greetingText = "I hope this summer breeze would last more than a season."
            break;
        case 17:
            greetingText = "Look at the world, so close, and I'm halfway to it."
            break;
        case 18:
            greetingText = "In the meantime we let it go, at the roadside we used to know."
            break;
        case 19:
            greetingText = "You are what you love, not who loves you."
            break;
        case 20:
            greetingText = "Why settle for less when there's more?"
            break;
        case 21:
            greetingText = "'Cause you know the good die young, but so did this, and so it must be better than I think it is."
            break;
        case 22:
            greetingText = "Try to shine. Stay wild."
            break;
        case 23:
            greetingText = "When it rains it pours, so stay thirsty like before."
            break;
        default:
            greetingText = "We could follow the sparks, I'll drive."
    }

    return (
        <section id="aboutblock" className="about">
            <button onClick={closeAbout}>Close</button>

            <div>
                I started building things some time ago. Exploring the intersection between design and code makes me feel powerful, and implementing design to create meaningful and useful products has been more fulfilling than my past dabbling in fine arts. The liberal arts&#8482; education at Yale has afforded me the opportunity to discover economics and political science as immensely interesting, although what I will do with them remains to be seen.
            </div>

            <div>
                In my free time, I enjoy watching Chinese TV, collecting song lyrics, and making Spotify <a href="https://open.spotify.com/user/2232mfikorkepi3hqhfpkgdhq" target="_blank" rel="noopener noreferrer">playlists</a>. I am fascinated by architecture and interior design and collect cool floor plans on a blog. One of my life ambitions is becoming Yelp Elite one day, but I figure my love for food trumps my critical insights nearly 100% of the time, so we will see about that.
            </div>

            <div>
                <span>
                <a href="https://www.instagram.com/rencewang/" target="_blank" rel="noopener noreferrer">Instagram &#x2197;&#xFE0E;</a>
                <a href="https://www.linkedin.com/in/lawrence-c-w/" target="_blank" rel="noopener noreferrer">LinkedIn &#x2197;&#xFE0E;</a>
                <a href="https://thoughts.rence.la/" target="_blank" rel="noopener noreferrer">Thoughts &#x2197;&#xFE0E;</a>
                <a href="https://inmydefense.glitch.me/" target="_blank" rel="noopener noreferrer">In My Defense &#x2197;&#xFE0E;</a>
                </span>
            </div>

            <div id="songs" className="mobile-hide">
                Songs I've Been Listening To: 
                <span> <Tracklist /> </span>
            </div>

            <div id="greeting" className="mobile-hide">{greetingText}</div>
            <div id="clock" className="mobile-hide">{time.toLocaleTimeString()}</div>
        </section>
    )
}

export default BlogFeatured
