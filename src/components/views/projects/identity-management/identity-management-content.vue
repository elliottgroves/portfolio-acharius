<template>
  <div class="project-content">
    <div class="content">
      <content-block title="Identity Management" header theme="five" ref="header">
        <div class="block-one">
          <span class="sponsor-info">Sponsored by <img class="okta-logo" src="@/assets/projects/identity-management/okta-logo.png"></span>
          <img class="okta-devices" src="@/assets/projects/identity-management/okta-devices.png">
          <span class="type-label">UX Design</span>
          <h3>Okta tasked us with tackling identity from a B2B model towards a B2C model.</h3>
          <div class="footer">
            <div class="footer-spans">
              <div class="span-column">
                <span><b>Category:</b>&nbsp;Academic</span>
                <span><b>Duration:</b>&nbsp;One Week</span>
              </div>
              <div class="span-column">
                <span><b>Date:</b>&nbsp;Fall 2018</span>
                <span><b>Team:</b>&nbsp;Sheng Jiang, Yash Mittal, Elizabeth King</span>
              </div>
            </div>
            <span><b>Skills:</b>&nbsp;User Research Synthesis, Wireframing, Sketching, Hi-Fi Mocks, Design Strategy</span>
          </div>
        </div>
      </content-block>
      <content-block title="Tl;dr" theme="two">
        <span class="content-header">Why</span>
        <p class="content-text">To help the average consumer manage digital identity</p>
        <span class="content-header">What</span>
        <p class="content-text">Leveraging Okta's tech platform towards the consumer market</p>
        <span class="content-header">How</span>
        <p class="content-text">Visualizing usage, centralized access control, and security alerts</p>
      </content-block>
      <content-block title="Design Process" theme="three">
        <div class="block-three full-width">
          <img class="design-process-artboard" src="@/assets/projects/identity-management/design-process-artboard.png">
          <div class="artboard-labels">
            <span>Narrow down on target problem space</span>
            <span>Conduct exploratory secondary and primary research</span>
            <span>Ideate and rapidly mock prototypes</span>
          </div>
        </div>
      </content-block>
      <content-block title="Problem Framing" theme="two">
        <div class="block-four full-width">
          <span class="content-header">Problem Space</span>
          <p>Individuals generally perceive little or no control over the information that comprise their identities.</p>
          <p>Without visibility into the exchange of identity attributes across the enterprise for authentication, verification, and authorization, individuals are vulnerable to identity fraud.</p>
          <p>Taken in a business context, users often have identity managed and represented through the organizations they respectively represent. Because Okta asked us to focus on ideas and experience surrounding identity, we narrowed to choose B2C relationships as this is mostly unexplored territory for Okta, being a B2B business model.</p>
          <span class="content-header">Focus Area</span>
          <img class="focus-area-diagram" src="@/assets/projects/identity-management/focus-area-diagram.png">
          <p>In our design space, we decided to focus on the process of onboarding <b>new users</b> with Okta to manage their online identity and personal data in the <b>personal space.</b></p>
          <p>Once we established a clear design for the personal space, we then projected into the future to focus on how the <b>personal space could translate into a work context.</b></p>
        </div>
      </content-block>
      <content-block title="Research" theme="four">
        <div class="block-five full-width">
          <div class="content-header">Methods</div>
          <p>Based on our limited schedule, we decided to deploy three research methods: <b>literature review</b>,&nbsp;<b>semi-structured interviews</b>, and&nbsp;<b>competitive analysis</b>.</p>
          <p>To see the full body of research we conducted, please click the button below.</p>
          <div class="full-research-link" @click="scrollToFullResearch">
            <span>Full Research</span>
          </div>
          <div class="content-header">Key Insights</div>
          <div class="circles">
            <div class="circle one">
              <div class="image">
                <img src="@/assets/projects/identity-management/circle-one.svg">
              </div>
              <b>Users often don't care about their personal data being online or consider their personal data valuable.</b>
            </div>
            <div class="circle two">
              <div class="image">
                <img src="@/assets/projects/identity-management/circle-two.svg">
              </div>
              <b>Users often don't take preemptive measures to secure their personal data online.</b>
            </div>
            <div class="circle three">
              <div class="image">
                <img src="@/assets/projects/identity-management/circle-three.svg">
              </div>
              <b>Users are unaware of how their personal data is being handled online, particularly in the case of social media sites selling their data.</b>
            </div>
          </div>
        </div>
      </content-block>
      <content-block title="Proposed Design" theme="two">
        <div class="block-seven full-width">
          <div class="content-header">Design Overview</div>
          <p>Okta, being one of the market leaders in the IDaaS [Identity as a Service] markets, has a state-of-the-art platform deploying Single Sign-On (SSO), Multi-factor Authentication (MFA), Universal Directory, Lifecycle Management, etc. It already has a stronghold in the B2B and B2E categories across industries.</p>
          <p>We intend to leverage these strengths and extend the platform to the consumer market.</p>
          <div class="content-header">Design Concept</div>
          <img class="full-width" src="@/assets/projects/identity-management/design-concept.png">
          <div class="content-header">Design Implementation</div>
          <p>Our design leverages the three previously mentioned concepts into the <b>Okta PIM</b>. PIM is a multi-platform, identity management application that addresses users' pain points regarding <b>application management, data transparency, and data security</b>.</p>
          <div class="content-header">Onboarding</div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-two.svg">1</h1>
              <img src="@/assets/projects/identity-management/workflow-one.png">
              <p>When new users sign up for Okta PIM, they can select their user type to better personalize their privacy and security settings.</p>
            </div>
            <div class="workflow-list-item right">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-two.svg">2</h1>
              <img src="@/assets/projects/identity-management/workflow-two.png">
              <p>Users are then able to import their login and application information from web service providers like Chrome, Firefox, and others.</p>
            </div>
          </div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-two.svg">3</h1>
              <img src="@/assets/projects/identity-management/workflow-three.png">
            </div>
            <div class="workflow-list-item">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-two.svg">4</h1>
              <img src="@/assets/projects/identity-management/workflow-four.png">
            </div>
          </div>
          <span class="full-width label">
            <p>Upon importing their applications, users can view and access them under customizable tabs, such as work or personal.</p>
          </span>
          <div class="content-header">Account Center</div>
          <div class="full-width">
            <h1 class="space-top"><img class="triangle" src="@/assets/images/triangles/triangles-two.svg">5</h1>
            <div class="account-five">
              <p>In the Account Center, users can review the information of their digital accounts.</p>
              <img src="@/assets/projects/identity-management/workflow-five.png">
            </div>
            <p class="thin">Users will be able to see their distributed number accounts two views. In the dashboard view, users can see detailed information about how their accounts are connected to different services linked through the connected accounts.</p>
          </div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-two.svg">6</h1>
              <img src="@/assets/projects/identity-management/workflow-six.png">
              <p>As users visualize their profile, they can see the number of accounts associated with them. Users can see how those accounts are leveraged and shared to other accounts.</p>
            </div>
            <div class="workflow-list-item right">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-two.svg">7</h1>
              <img src="@/assets/projects/identity-management/workflow-seven.png">
              <p>For example, in the case of James Morrow, he uses his Gmail account to log in to Facebook, which then uses his Facebook account to connect to other applications.</p>
            </div>
          </div>
          <div class="content-header">Security Manager</div>
          <div class="workflow-row full-width">
            <div class="workflow-list-item">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-two.svg">8</h1>
              <img src="@/assets/projects/identity-management/workflow-eight.png">
              <p>Additionally, users can receive updates on the status of their accounts.</p>
            </div>
            <div class="workflow-list-item right">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-two.svg">9</h1>
              <img src="@/assets/projects/identity-management/workflow-nine.png">
              <p>Through these updates, users can decide to change their privacy and security settings to best fit thecurrent situation.</p>
            </div>
          </div>
        </div>
      </content-block>
      <content-block title="Design Strategy" theme="three">
        <div class="block-eight">
          <p class="full-width">As we move further into the digital world, the methods for defining an individual's identity grow more and more complex. A personal is no longer simply represented by name, sex, date of birth, and address. Identities have changed over time to include other details such as employment, social, financial, and medical data and history.</p>
          <img class="full-width design-strategy" src="@/assets/projects/identity-management/design-strategy-diagram.png">
          <p class="full-width">In order to address this ever-changing construct of identity in the digital world, we envision Okta PIM to be a precursor to Phase 4. In the near future, we anticipate self-sovereign identity networks driving this sort of human interaction and placing the locus of control in people's hands.</p>
          <img class="full-width" src="@/assets/projects/identity-management/design-strategy-flow.svg">
          <div class="flow-labels full-width">
            <p>Bring greater transparency to the user by introducing a real-time usage map that shows who, where, and how our personal information is being used, along with access control and security alert mechanicms.</p>
            <p>Creating services based off PIM that enable the user to perform actions such as filing taxes, making payments, filing insurance claims from a centralized locations.</p>
            <p>Providing ultimate authority to the user over their identity with control over identity profiles and attributes, visibility, auditable records, all while maintaining trust.</p>
          </div>
        </div>
      </content-block>
      <content-block title="Design Considerations" theme="two">
        <div class="block-nine full-width">
          <b class="full-width">What happens if a user's Okta account gets hacked?</b>
          <p>A user getting their Okta account hacked would be much like any other case - a user would have to reset their password. To log in to the Okta account, however, Okta users are required to use either two-step factor authentication or multi-factor authentication. Therefore, the likelihood of a user's account being hacked is decreased.</p>
          <b class="full-width">What happens to PIM if users change their login information on their applications?</b>
          <p>In the event that a user decides to update their login information to a specific application, PIM would identify the change via a security alert and ask users to update the information on the Okta PIM platform.</p>
          <b class="full-width">What happens if PIM doesn't work?</b>
          <p>In the event that PIM's functionality does not work, users would still be able to control their data and security preferences through the individual applications. However, users would not be able to visualize how their personal data cascades.</p>
        </div>
      </content-block>
      <content-block title="Research (Extended)" theme="seven">
        <div class="block-ten full-width" ref="FullResearchHeader">
          <div class="content-header">Insight Support</div>
          <div class="circles single full-width">
            <div class="circle">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-five.svg">1</h1>
              <div class="image">
                <img src="@/assets/projects/identity-management/research-circle-image.svg">
              </div>
              <b>Users often don't care about their personal data being online or consider their personal data valuable.</b>
            </div>
          </div>
          <div class="content-header">Primary Research</div>
          <div class="research-content">
            <div class="research-header">
              <span class="big"><b>Semi-Structured Interview</b>: 10.01.2018</span>
              <span class="big"><b>Participant</b>: Female, 22, Professional Caretaker</span>
            </div>
            <b>Q: What are your top concerns about your personal data on the Internet?</b>
            <span>"I just don't think about it."</span>
            <b>Q: What social media sites do you use? What sites have you signed up for?</b>
            <span>Facebook, Tumblr, Instagram, Pinterest, shopping websites</span>
            <b>Q: Do you pay attention to app permission and what data you allow apps access to?</b>
            <span>"Never."</span>
            <b>Q: How do you feel about companies selling your personal data to create targeted ads?</b>
            <span>"It's annoying. I try not to pay attention to ads."</span>
            <b>Q: How do you feel about having your personal information public on Facebook?</b>
            <span>"I don't care really. Should I care?"</span>
          </div>
          <div class="circles single full-width">
            <div class="circle">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-five.svg">2</h1>
              <div class="image">
                <img src="@/assets/projects/identity-management/circle-two.svg">
              </div>
              <b>Users often don't take preemptive measures to secure their personal data online.</b>
            </div>
          </div>
          <div class="content-header">Secondary Research</div>
          <img class="secondary-research-image" src="@/assets/projects/identity-management/research-graph-one.png">
          <img class="secondary-research-image" src="@/assets/projects/identity-management/research-graph-two.png">
          <div class="circles single full-width">
            <div class="circle">
              <h1><img class="triangle" src="@/assets/images/triangles/triangles-five.svg">3</h1>
              <div class="image">
                <img src="@/assets/projects/identity-management/circle-three.svg">
              </div>
              <b>Users are unaware of how their personal data is being handled online, particularly in the case of social media sites selling their data.</b>
            </div>
          </div>
          <div class="content-header">Primary Research</div>
          <div class="research-content">
            <div class="research-header">
              <span class="big"><b>Semi-Structured Interview</b>: 10.02.2018</span>
              <span class="big"><b>Participant</b>: Female, 56, Business Director</span>
            </div>
            <b>Q: What does digital identity mean to you?</b>
            <span>"Identity is about keeping my personal identifiable information secure - so my social security number, driver's license number, and credit card numbers."</span>
            <b>Q: What social media sites do you use? What sites have you signed up for?</b>
            <span>Facebook and Instagram</span>
            <b>Q: Do you pay attention to app permission and what data you allow apps access to?</b>
            <span>"No."</span>
            <b>Q: What do you do to protect your digital identity?</b>
            <span>"I use LastPass and LifeLock. My husband had his identity stolen in an Anthem data breach, so I wanted to try and protect us from further misuse.</span>
          </div>
          <div class="content-header">Competitive Analysis</div>
          <img class="competitive-analysis-image" src="@/assets/projects/identity-management/competitive-analysis.png">
          <div class="content-header">Contrary Research</div>
          <div class="research-content">
            <p>It's always important to acknowledge contradictory information while researching because telling the perfect story of design is deceptive. If you only present information that directly supports your claims and don't include contrary information, you risk missing pain points users experience as well as oversimplifying the problem.</p>
            <div class="research-header">
              <span class="big"><b>Semi-Structured Interview</b>: 10.03.2018</span>
              <span class="big"><b>Participant</b>: Male, 27, Process Improvement Leader</span>
            </div>
            <b>Q: What does digital identity mean to you?</b>
            <span>"Identity would be my footprint - my phones, social media, work computer, what other people have access to, and stuff like that."</span>
            <b>Q: What social media sites do you use? What sites have you signed up for?</b>
            <span>"Facebook and Twitter. I have Instagram but never use it."</span>
            <b>Q: Do you pay attention to app permission and what data you allow apps access to?</b>
            <span>"I try to limit it as much as possible."</span>
            <b>Q: What do you do to protect your digital identity?</b>
            <span>"I use LifeLock. I think it's important to protect my identity as much as possible."</span>
          </div>
        </div>
      </content-block>
      <content-block title="Reflection" theme="one">
        <div class="block-eleven full-width">
          <b>What worked?</b>
          <p>Our division of labor controlled for the lifespan of the project (one week). We set out a research plan and assigned deliverables for each team meeting. All group members delivered research, iterations, prototypes, and wireframes on-time and in-bulk. Each member of this team had distinct strengths to bring to the project that allowed us to not only balance each others' ideas, but also leverage our differing backgrounds and perspectives to consider many aspects of the design in the one-week timeline.</p>
          <b>What to improve for next time?</b>
          <p>Although it seemed that each area of our design had merit, it became difficult within the one-week timespan to prioritize these focus points of our design and design strategy. I can personally work to further constrain the scope of the project within the timeline in order to avoid having a design too narrow with many particular considerations identified versus a very apt design with not as many secondary considerations.</p>
          <i>All iconography sourced from The Noun Project: https://thenounproject.com/</i>
          <div class="next-project-footer">
            <div class="next-project">
              <img class="triangle" src="@/assets/images/triangles/triangles-one.svg">
              <span @click="$router.push({ name: 'Portfolio' })">Next Project</span>
            </div>
          </div>
        </div>
      </content-block>
    </div>
  </div>
</template>

<script>
  import ContentBlock from '@/components/content/content-block.vue';

  export default {
    name: 'identity-management-content',
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
      },
    },
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
    .circles {
      display: flex;
      justify-content: space-between;
      .circle {
        display: flex;
        flex-flow: column;
        width: 250px;
        align-items: center;
        text-align: center;
        position: relative;
        margin-top: 40px;
        .image {
          width: 200px;
          height: 200px;
          border-radius: 100%;
          background-color: #fff;
          margin-bottom: 20px;
          padding: 10px;
          img {
            width: 180px;
          }
        }
        h1 {
          left: -170px;
          position: absolute;
          display: flex;
          padding-top: 25px;
          .triangle {
            margin-top: -25px;
            width: 70px;
          }
        }
      }
      &.single {
        justify-content: center;
      }
    }

    .block-one {
      display: flex;
      flex-flow: column;
      align-items: center;
      max-width: 600px;
      margin: auto;
      text-align: center;
      .sponsor-info {
        display: inline-block;
        font-size: 1.3em;
        margin: -40px 0 10px 0;
        .okta-logo {
          height: 28px;
          margin-left: 4px;
          vertical-align: -4px;
        }  
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
      .okta-devices {
        width: 600px;
      }
      .footer {
        position: relative;
        background-color: #FD5F80;
        display: flex;
        flex-flow: column;
        margin-top: 24px;
        font-size: 0.66em;
        color: #fff;
        width: 100%;
        text-align: left;
        padding: 40px;
        z-index: 2;
        &>* {
          margin-bottom: 12px;
        }
        .footer-spans {
          display: flex;
          margin: 0;
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
      display: flex;
      flex-flow: column;
      .focus-area-diagram {
        width: 500px;
        margin: auto;
      }
    }
    .block-five {
      .full-research-link {
        position: relative;
        cursor: pointer;
        margin: 100px auto;
        height: 62px;
        background-color: #fa6182;
        width: 350px;
        text-align: center;
        line-height: 62px;
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
          width: 350px;
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
    .user-profile-image {
      border: 2px solid #777;
    }
    .block-seven {
      display: flex;
      flex-flow: column;
      color: #1C4966;
      h1 {
        display: flex;
        align-self: left;
        color: #FD5F80;
        font-weight: normal;
        padding-top: 10px;
        .triangle {
          width: 70px;
          margin: -20px -10px 0 0;
        }
        &.space-top {
          margin-top: 20px;
        }
      }
      .thin {
        width: 500px;
        margin: 30px auto;
      }
      .account-five {
        text-align: center;
        p {
          text-align: left;
          margin: 20px 0 50px 0;
        }
        img {
          width: 500px;  
        }
      }
      p {
        font-size: 0.8em;
        text-align: center;
      }
      .workflow-row {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        margin: 30px 0;

        .workflow-list-item {
          max-width: 400px;
          display: flex;
          flex-flow: column;
          img {
            max-width: 400px;
            margin-bottom: 20px;
          }
          text-align: center;
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
      color: #fff;
      display: flex;
      flex-flow: column;
      align-items: center;
      .design-strategy {
        position: relative;
        &:after {
          position: absolute;
          transition: left 0.1s ease, top 0.1s ease;
          left: -4px;
          top: -4px;
          width: 300px;
          height: 62px;
          border: 2px solid #ddd;
          content: "";
        }
      }
      * {
        margin-bottom: 20px;
      }
      .flow-labels {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        p {
          max-width: 260px;
          font-size: 0.8em;
          padding-right: 36px;
        }
      }
    }
    .block-ten {
      max-width: 600px;
      .research-content {
        display: flex;
        flex-flow: column;
        .research-header {
          margin-top: 14px;
          display: flex;
          flex-flow: column;
          * {
            margin: 0;
          }
        }
        span {
          margin: 10px 0;
          font-size: 0.8em;
          &.big {
            font-size: 1.2em;  
          }
        }
        b {
          margin-top: 30px;
        }
        p {
          font-size: 0.8em;
        }
      }
      .competitive-analysis-image {
        width: 600px;
      }
      .secondary-research-image {
        width: 100%;
        margin: 30px 0;
      }
    }
    .block-eleven {
      .next-project-footer {
        margin-top: 100px;
        font-size: 37px;
        text-transform: uppercase;
        color: #fff;
        text-shadow: 3px 3px #1C4966;
        font-weight: bold;
        display: flex;
        .next-project {
          display: flex;
          margin-left: auto;
          .triangle {
            margin-right: 10px;
            width: 70px;
          }
          span {
            cursor: pointer;
            transition: margin 0.2s ease;
            &:hover {
              margin: 0 -5px 0 5px;
            }
          }
        }
      }
    }
  }
</style>