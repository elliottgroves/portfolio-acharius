<template>
  <div class="project-content">
    <div class="content">
      <content-block title="Food Delivery" theme="five">
        <div class="block-one full-width">
          <span class="sponsor-info">Sponsored by <img class="logo" src="@/assets/projects/food-delivery/relishworkslogo.png"></span>
          <img class="screen" src="@/assets/projects/food-delivery/food-delivery-screen.png">
          <span class="type-label">UX Design</span>
          <span class="info-label">Relish Works tasked us with exploring non-chain restaurants for unmet needs towards off-premise dining</span>
          <div class="footer">
            <div class="footer-spans">
              <div class="span-column">
                <span><b>Category:</b>&nbsp;Academic</span>
                <span><b>Duration:</b>&nbsp;One Week</span>
              </div>
              <div class="span-column">
                <span><b>Date:</b>&nbsp;Fall 2018</span>
                <span><b>Team:</b>&nbsp;Sydney Arnold, Jordan Mazerolle, Collin Pfender</span>
              </div>
            </div>
            <span><b>Skills:</b>&nbsp;User Research Synthesis, Wireframing, Sketching, Hi-Fi Mocks, Design Strategy</span>
          </div>
        </div>
      </content-block>
      <content-block title="Tl;dr" theme="two">
        <span class="content-header">Why</span>
        <p class="content-text">To discover new pain points caused by off-premise dining</p>
        <span class="content-header">What</span>
        <p class="content-text">Exploring off-premise dining rather than chain restaurants</p>
        <span class="content-header">How</span>
        <p class="content-text">Conducting extensive primary and secondary research and prototyping</p>
      </content-block>
      <content-block title="Design Process" theme="four">
        <div class="block-three full-width">
          <img class="design-process-artboard" src="@/assets/projects/food-delivery/design-process-artboard.svg">
          <div class="artboard-labels">
            <span>Explore problem space through constraints</span>
            <span>Conduct extensive primary research, supplemented by secondary research</span>
            <span>Ideate, conceptualize, and prototype</span>
          </div>
        </div>
      </content-block>
      <content-block title="Company Values" theme="two">
        <div class="block-four">
          <span class="content-header">Core Values</span>
          <p class="content-text values-paragraph">After a class-conducted interview session with Relish Works, we identified three key focus areas that would connect our problem space and eventually final design to the values that Relish Works upholds. These are the main components and considerations that directed our research.<br><br>Relish Works expressed they wanted a solution that would <b>consider scalability, target market trends over fads, and provide immediate value</b> in our problem space.</p>  
        </div>
      </content-block>
      <content-block title="Research" theme="four">
        <div class="block-five full-width">
          <div class="content-header">Methods</div>
          <p>We constructed a research deployment plan to work quickly in our problem space to better understand the complications and pain points surrounding off-premise dining. This included <b>expert interviews, a focus group, competitive analysis, and walking probes.</b><br><br>To see the full body of research we conducted, please click the button below.</p>
          <div class="full-research-link" @click="scrollToFullResearch">
            <span>Full Research</span>
          </div>
          <div class="content-header">Research Takeaways</div>
          <p><b>1.</b> The complications arise when a dedicated system and relationship hasn't been established for prioritization and handling</p>
          <p><b>2.</b> Breakdowns in the system result in unmet expectations</p>
          <p><b>3.</b> Restaurants build up reputations among delivery drivers for how they handle in-house dining, off-premise dining, and delivery processes.</p>
          <p><b>4.</b> Relations between drivers and dispatch are often disjointed.</p>
        </div>
      </content-block>
      <content-block title="Problem Space" theme="two">
        <div class="block-six full-width">
          <div class="content-header">AEIOU Workshop</div>
          <p class="info-paragraph">In order to generate directive and provide a taxonomy towards our insights, we performed an AEIOU workshop. Akin to affinity diagramming this exercise required our team to develop as many ideas as possible. Unlike traditional affinity diagramming, we had preassigned categories: Activities, Environment, Interactions, Objects, and Users. We used this structure to provoke meaningful discussion over the entire problem space, eliciting our assumptions, and providing spatial representation of relation.</p>
          <img class="planning-image" src="@/assets/projects/food-delivery/planning.png">
          <img class="scalability-image" src="@/assets/projects/food-delivery/scalability.png">
          <div class="content-header">Research Synthesis</div>
          <div class="research-synthesis">
            <div class="info">
              <p>After our research phase, we complied possible pain points using the AEIOU methodology to identity multiple areas of the off-premise dining experience. Ultimately, our research pointed us towards focusing on the space between restaurant workers and delivery drivers.</p>
              <p>Because third-party services do not always have established relationships with restaurants, we found that from a systemic level, the most effective change comes from <b>changing the relationship between operators and drivers</b>, as these interactions recur most.</p>
            </div>
            <img class="image" src="@/assets/projects/food-delivery/research-synthesis.png">
          </div>
          <p class="rs-footer">The <b>lack of relationship</b> between the delivery drivers and food service providers led to a <b>misattribution of fault</b> when there was a breakdown in the process.</p>
        </div>
      </content-block>
      <content-block title="Proposed Design" theme="two">
        <div class="block-seven full-width">
          <div class="content-header">Design Overview</div>
          <p class="info">With our targeted pain points, we needed a <b>low-cost, potentially hands-free solution</b>. Our research illustrated that food truck workers are often on-the-go and cannot have that flow interrupted by incoming emails and notifications while also attempting to serve in-house customers. Therefore, we developed a digital ticket prototype using Arduinos and screens that would be placed in the same area that printed tickets go.</p>
          <div class="content-header">Design Concept</div>
          <div class="concept-header">
            <img src="@/assets/projects/food-delivery/concept-header.png">
          </div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1>1</h1>
              <img src="@/assets/projects/food-delivery/concept-one.png">
              <p>As an auto-rotating <b>digital ticket in physical Arduino form</b>, an indicator displays the current volume of orders.</p>
            </div>
            <div class="workflow-list-item">
              <h1>2</h1>
              <img src="@/assets/projects/food-delivery/concept-two.png">
              <p>Tapping the order button brings up order details for easy access and checking between operator and drivers.</p>
            </div>
          </div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1>3</h1>
              <img src="@/assets/projects/food-delivery/concept-three.png">
              <p>Color change indicates urgency of order to arrival time.</p>
            </div>
            <div class="workflow-list-item">
              <h1>4</h1>
              <img src="@/assets/projects/food-delivery/concept-four.png">
              <p>The driver profile panel includes basic information about the delivery driver to build trust with the operators.</p>
            </div>
          </div>
        </div>
      </content-block>
      <content-block title="Design Strategy" theme="three">
        <div class="block-eight full-width">
          <p class="full-width">We split our future concept into three phases, focusing primarily on phase one in this project and will continue to iterate as our success metrics are reached after phase one implementation starts. Phase one focuses on immediate communication issues, phase two upscales the cost of the design implementation to add features such as collecting delivery data and predictive supply trends, and phase three focuses on connecting fresh produce to local businesses as per Relish Works' values.</p>
          <div class="phases">
            <div class="image-block">
              <span>Phase 1</span>
              <img src="@/assets/projects/food-delivery/phase-one.png">
            </div>
            <div class="image-block">
              <span>Phase 2</span>
              <img src="@/assets/projects/food-delivery/phase-two.png">
            </div>
            <div class="image-block">
              <span>Phase 3</span>
              <img src="@/assets/projects/food-delivery/phase-three.png">
            </div>
          </div>
          <div class="content-header">Defining Success</div>
          <h3>Less Pressure Because Expectations Are Known</h3>
          <p>In order to ensure that relationships between delivery drivers and operators have improved, a follow-up focus group can be used after a year-long period to monitor improvement of overall work environment along with surveys given to both food operators and delivery drivers. One survey should be dispersed at the beginning of the implementation and another one year after initialization.</p>
          <h3>Quicker Pickup / Delivery Time Optimization</h3>
          <p>To monitor time-of-delivery, the GPS-enabled delivery driver devices can be monitored for time to location (weighed against usual timing), time spent on-premise, and time to consumer. If this improves, the perceived quality of food will be higher on the consumer end due to freshness/ heat of the food maintained from optimized timing of the order.</p>
        </div>
      </content-block>
      <content-block title="Research (Extended)" theme="four">
        <div class="block-ten full-width" ref="FullResearchHeader">
          <div class="content-header">Pain Points</div>
          <div class="pain-point">
            <img src="@/assets/projects/food-delivery/pain-points-systems.png">
            <div>
              <h3>Systems</h3>
              <p>The major differentiation between all of the restaurants our class interview was that each restaurant had its own complex system of how they receive, process, and deliver orders. Some restaurants used technologies such as iPads, phones, or tickets to receive and process orders, while others used paper systems. Once the orders were done for a selected time period, there were again different methods and formats of storing and analyzing that data.</p>
            </div>
          </div>
          <div class="pain-point">
            <img src="@/assets/projects/food-delivery/pain-points-communication.png">
            <div>
              <h3>Communication</h3>
              <p>Our team specifically focused on chatting with management positions within third party delivery companies. From these interviews we had conversations about the most common complaints they hear regarding their company. We realized that most complaints were focused on miscommunications between the restaurant workers preparing or giving the order to the driver, particularly concerning inaccuracies in the order.</p>
            </div>
          </div>
          <div class="content-header">Primary Research</div>
          <div class="research-content">
            <span><b>Expert Interview</b>: 09.18.2018</span>
            <div>
              <span><b>Participant</b>: Male, 35, Co-Owner of The Big Cheese (Food Truck)</span>
            </div>
            <p>When interviewing our participant, our team heard complaints regarding fresh food, complaints from customers, and the balance between serving in-house customers and off-premise dining orders.</p>
            <p>He stressed that <b>often there is not a system set up</b> to deal with who should be prioritized in getting their food: in-house customers or off-premise dining delivery orders.</p>
          </div>
          <div class="research-content">
            <span><b>Expert Interview</b>: 09.17.2018</span>
            <div>
              <span><b>Participant</b>: Male, 45, RDS Manager / Owner (Order-In Delivery Service)</span>
            </div>
            <p>Most of the time it's not the driver's fault if a mistake happens. <b>The complications arise when a dedicated system and relationship hasn't been established with the restaurant and the delivery service provider.</b></p>
            <p>Because of this absence, it leads to complications in predicting order times for consumers and thus unmet expectations when the order takes longer than anticipated.</p>
          </div>
          <div class="research-content">
            <span><b>Expert Interview</b>: 09.18.2018</span>
            <div>
              <span><b>Participant</b>: Female, 50, RDS Delivery Driver</span>
            </div>
            <p>As a delivery driver, our participant noted <b>anxiety anytime the process of delivery took longer than expected, which usually leads to miscommunication with the customer</b> who then complains to the restaurant. These strings of miscommunications occur when a restaurant doesn't have a good system in place to handle delivery drivers during busy hours, such as dinner time.</p>
          </div>
          <div class="research-content">
            <span><b>Focus Group</b>: 09.18.2018</span>
            <div>
              <span><b>Participant</b>: Three Men, 23-27, BtownMenus Delivery Drivers</span>
            </div>
            <p>Restaurants often build up reputations among the drivers determined by several factors such as order lateness, on-premise designated point of contact or pickup, and advance ordering. Drivers choose which restaurant orders they want to take, <b>often blacklisting certain restaurants because of difficulty dealing with the restaurants' processes.</b></p>
            <p>Ultimately, these large ordering services lack repore with these restaurants, fostering no relationship or positive experiences towards this process internally, which provides <b>no incentive for restaurant employees to engage with these drivers</b> because it leads to complicating their daily job flow.</p>
          </div>
          <div class="research-content">
            <span><b>Walking Probe</b>: 09.18.2018</span>
            <div>
              <span><b>Participant</b>: Us!</span>
            </div>
            <p>We took advantage of a few of the restaurants and food trucks along the downtown Bloomington, IN area. In cataloging and annotating photos, <b>we expanded our perception of what occurs in a service counter exchange</b>, as well as a sample of artifacts that our food operators and delivery drivers experience.</p>
          </div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1>1</h1>
              <img src="@/assets/projects/food-delivery/walk-one.png">
              <p>At Chipotle, the open service encounter occurs at this POS. If picking up for delivery, workers cut the line to request if their order is ready.</p>
            </div>
            <div class="workflow-list-item">
              <h1>2</h1>
              <img src="@/assets/projects/food-delivery/walk-two.png">
              <p>Outside Chipotle a BtownMenus delivery service car exits from a popular alleyway. Many sorts of vehicle types may demand different enter and exit strategies for drivers.</p>
            </div>
          </div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1>3</h1>
              <img src="@/assets/projects/food-delivery/walk-three.png">
              <p>Taking a closer look at the alleyway where the Btown Menus car once resided, we can see a natural "pull-up" or "rive-up" to a door on the left side of the photo. This acts as a point of entry for many call ahead orders, not simply for delivery services.</p>
            </div>
            <div class="workflow-list-item">
              <h1>4</h1>
              <img src="@/assets/projects/food-delivery/walk-four.png">
              <p>Right next door, there is a very large Mexican food truck, which requires an extra large parking space.</p>
            </div>
          </div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1>5</h1>
              <img src="@/assets/projects/food-delivery/walk-five.png">
              <p>We got the opportunity to help this Kebab truck park in a tight spot. As you can see the service window is quite constrained.</p>
            </div>
            <div class="workflow-list-item">
              <h1>6</h1>
              <img src="@/assets/projects/food-delivery/walk-six.png">
              <p>The Kebab owner was very generous in allowing us a photo of their inner artifact ecology. By looking closely at his main tools, you can see a hand-cut pan, for instance.</p>
            </div>
          </div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1>7</h1>
              <img src="@/assets/projects/food-delivery/walk-seven.png">
              <p>Accessing The Big Cheeze food truck, we are able to identify utensils such as formal spatulas,and a flat top grill. Creative heating is displayed as the workers place a tin can of cheese on the flat top.</p>
            </div>
            <div class="workflow-list-item">
              <h1>8</h1>
              <img src="@/assets/projects/food-delivery/walk-eight.png">
              <p>Next to the flattop, we found a fryer, a pair oftongs, and a surface to hold finished items, like the fries.</p>
            </div>
          </div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1>9</h1>
              <img src="@/assets/projects/food-delivery/walk-nine.png">
              <p>The service exchange and holding counter has an iPad as the POS system. The messiness below demonstrates a creative array of things.</p>
            </div>
            <div class="workflow-list-item">
              <h1>10</h1>
              <img src="@/assets/projects/food-delivery/walk-ten.png">
              <p>In comparison to the Kebab truck, this food truck has a very large service window, which affords more face time and interaction, whether from customers or delivery drivers.</p>
            </div>
          </div>
          <div class="insights">
            <h1>Walking Probe Insights</h1>
            <p>When in brick and mortar environments, <b>it can feel a little awkward or intrusive to reach a POS system</b> to pick-up deliveries if a specific pick-up window is not in place.</p>
            <p>The <b>service window</b>, especially in food trucks, is a strong determining factor on who has access to the food operate. <b>It can also constrict the social pressure felt by the worker</b>.</p>
            <p>In off-premise food operation vehicles, there is often a non-uniform, cluster, or array of artifacts. <b>This space is not readily interpretable environment for strangers</b> (such as delivery service-people).</p>
          </div>
          <div class="content-header">Secondary Research</div>
          <img src="@/assets/projects/food-delivery/secondary-research.svg">
          <div class="secondary-research">
            <p><b>Off-premise dining will continue to contribute to a large proportion of meals</b>, increased by 12% each year. This is primarily attributed to <b>relationships surrounding food delivery</b>, where RPS (Restaurant Delivery Services) drivers are key players in that system.</p>
            <p>We also assembled a restaurant matrix to better understand our problem space.</p>
            <img class="full-width" src="@/assets/projects/food-delivery/restaurant-matrix.png">
            <p>Although we aren't technical engineers, we also tried to <b>consider the cost of our design's materials</b> through researching Arduino solutions already on the market at various price points based on our design strategy.</p>
            <div class="costs">
              <p><b>Wifi-Enabled Arduino Device</b>&nbsp;- $12.99<br>
              <b>Arduino TFT 5-inch Touch Screen</b>&nbsp;- $34.88<br>
              <b>Raspberry Pi 3 Model B</b>&nbsp;- $37.30<br>
              <b>Raspberry Pi 5-inch TFT Touch Screen</b>&nbsp;- $36.99</p>
              <p><i>Additional costs may include wiring, soldering supplies and resistors.</i></p>  
            </div>
          </div>
          <div class="citations">
            <h2>Citations:</h2>
            <h3>Trends</h3>
            <p><i>usfoods.com/great-food/food-trends/off-premise-dining-is-here-to-stay--are-you-ready-for-it-.html</i></p>
            <p><i>restaurantbusinessonline.com/consumer-trends/stats-are-consumers-are-upping-restaurant-delivery</i></p>
            <h3>Restaurant Matrix</h3>
            <p><i>Data collected through personal knowledge and staff interviews</i></p>
            <p><i>Costs taken from Amazon Marketplace listings in September of 2019.</i></p>
          </div>
        </div>
      </content-block>
      <content-block title="Reflection" theme="one">
        <div class="block-eleven full-width">
          <b>What worked?</b>
          <p>We had a really good chemistry as a team that allowed us to experiment with unfamiliar design and research methodologies. As the point of this class, Rapid Design for Slow Change, was about how to apply classical learning of methods to practical design prompts sponsored by companies, we decided in this week and project to really push the boundaries of our problem space and exhaust all our resources and contacts to truly understand the users and interactions within this space.</p>
          <b>What to improve for next time?</b>
          <p>Overall, we executed our research plan well and within the time constraints of the project, but when the conceptualization phase of the project came, we struggled initially to ideate on any specific solution. We eventually arrived at the solution we have now, but needed to prioritize more time for prototyping and visual design for our concept.</p>
          <i><b>All iconography sourced from The Noun Project: https://thenounproject.com/</b></i>
          <div class="next-project-footer">
            <span>Previous Project</span>
            <span>Next Project</span>
          </div>
        </div>
      </content-block>
    </div>
  </div>
</template>

<script>
  import ContentBlock from '@/components/content/content-block.vue';

  export default {
    name: 'food-delivery-content',
    components: {
      ContentBlock
    },
    methods: {
      scrollToFullResearch() {
        const options = {
            easing: 'ease-in-out',
            offset: -200,
            x: false,
            y: true
        };
        const element = this.$refs.FullResearchHeader;     
        this.$scrollTo(element, 1000, options);
      }
    }
  }
</script>

<style scoped lang="scss">
  .content {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin-top: 40px;
    .full-width {
      max-width: 820px;
    }
    .block-one {
      display: flex;
      flex-flow: column;
      align-items: center;
      max-width: 620px;
      margin: auto;
      margin-top: -40px;
      text-align: center;
      .sponsor-info {
        display: inline-block;
        font-size: 1.3em;
        margin: 8px 0 10px 0;
        .logo {
          height: 28px;
          margin-left: 4px;
          vertical-align: -4px;
        }  
      }
      .screen {
        width: 200px;
        margin-top: 30px;
      }
      .type-label {
        background-color: #FD5F80;
        color: #fff;
        font-weight: bold;
        padding: 3px 18px;
        font-size: 0.8em;
        margin: 40px 0;
        box-shadow: 3px 3px #D5D5D5;
      }
      .info-label {
        color: #1C4966;
        font-weight: bold;
      }
      .footer {
        background-color: #FD5F80;
        display: flex;
        flex-flow: column;
        margin-top: 24px;
        font-size: 0.66em;
        color: #fff;
        width: 100%;
        text-align: left;
        padding: 40px;
        &>* {
          margin-bottom: 12px;
        }
        .footer-spans {
          display: flex;
          .span-column {
            display: flex;
            flex-flow: column;
            span {
              margin: 0 23px 14px 0;
            }
          }  
        }
      }
    }
    .block-three {
      .design-process-artboard {
        width: 800px;
        margin-left: 15px;
        margin-top: 50px;
      }
      .artboard-labels {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        color: #fff;
        text-align: center;
        font-size: 0.95em;
      }
    }
    .block-four {
      max-width: 600px;
      .values-paragraph {
        margin-top: 20px;
        font-size: 0.75em;
      }
    }
    .block-five {
      .full-research-link {
        position: relative;
        cursor: pointer;
        margin: auto;
        height: 62px;
        background-color: #fa6182;
        width: 380px;
        text-align: center;
        font-weight: bold;
        line-height: 62px;
        margin-top: 80px;
        margin-bottom: 60px;
        span {
          color: #fff;
          text-transform: uppercase;
          font-size: 1.8em;
        }
        &:after {
          position: absolute;
          transition: left 0.1s ease, top 0.1s ease;
          left: -4px;
          top: -4px;
          width: 380px;
          height: 62px;
          border: 2px solid #ddd;
          content: "";
        }
        &:hover {
          background-color: darken(#fa6182, 3%);
          &:after {
            left: 0;
            top: 0;
          }
        }
      }
    }
    .block-six {
      .info-paragraph {
        font-size: 0.8em;
      }
      .planning-image {
        width: 100%;
        margin-top: 40px;
      }
      .scalability-image {
        width: 100%;
        margin-top: 80px;
      }
      .research-synthesis {
        display: flex;
        .info {
          font-size: 0.8em;
        }
        .image {
          width: 50%;
        }
      }
      .rs-footer {
        font-size: 0.8em;
        margin-top: 60px;
      }
    }
    .block-seven {
      max-width: 600px;
      .info {
        font-size: 0.8em;
        margin-bottom: 40px;
      }
      .concept-header {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 40px 0;
        img {
          width: 200px;  
        }
      }
      .workflow-row {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        .workflow-list-item {
          max-width: 200px;
          img {
            max-width: 200px;
            margin-bottom: 20px;
          }
          p {
            font-size: 0.8em;
          }
        }  
      }
      .label {
        p {
          width: 550px;
          margin: auto;
        }
      }
    }
    .block-eight {
      .phases {
        display: flex;
        justify-content: space-between;
        margin-top: 80px;
        margin-bottom: 40px;
        .image-block {
          display: flex;
          flex-flow: column;
          span {
            text-align: center;
          }
          img {
            width: 200px;
          }
        }
      }
      h3 {
        margin-top: 50px;
      }
    }
    .block-ten {
      .pain-point {
        display: flex;
        margin-top: 50px;
        img {
          width: 40%;
        }
        h3 {
          margin-bottom: 20px;
        }
        p {
          font-size: 0.8em;
        }
      }
      .research-content {
        display: flex;
        flex-flow: column;
        font-size: 1.2em;
        margin-top: 30px;
        span {
          margin: 10px 0;
        }
        b {
          margin-top: 30px;
        }
        p {
          margin-top: 12px;
          font-size: 0.8em;
        }
      }
      .workflow-row {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        margin-bottom: 30px;
        .workflow-list-item {
          max-width: 400px;
          img {
            max-width: 400px;
            margin-bottom: 20px;
          }
          p {
            font-size: 0.7em;
          }
        }  
      }
      .insights {
        background-color: #FD5F80;
        padding: 50px 80px;
        width: 700px;
        margin: auto;
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        p {
          font-size: 0.8em;
        }
      }
      .secondary-research {
        p {
          margin: 20px 0;
          font-size: 0.8em;
        }
      }
      .citations {
        font-size: 0.8em;
        h3 {
          margin-top: 40px;
        }
      }
    }
    .block-eleven {
      .next-project-footer {
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
        font-size: 37px;
        text-transform: uppercase;
        color: #fff;
        text-shadow: 3px 3px #549aae;
      }
    }
  }
</style>