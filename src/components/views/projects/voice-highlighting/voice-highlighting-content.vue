<template>
  <div class="project-content">
    <div class="content">
      <content-block title="24-Hour Challenge" theme="six">
        <div class="block-one full-width">
          <div class="header-details"><img class="audible-logo" src="@/assets/projects/voice-highlighting/audible-logo.png"></div>
          <img class="mockup-image" src="@/assets/projects/voice-highlighting/mockup.png">
          <span class="type-label">UX Design</span>
          <h2>Conceptualizing how to highlight in audiobooks</h2>
          <div class="footer">
            <div class="footer-spans">
              <div class="span-column">
                <span><b>Category:</b>&nbsp;Academic</span>
                <span><b>Duration:</b>&nbsp;24 Hours</span>
              </div>
              <div class="span-column">
                <span><b>Date:</b>&nbsp;Fall 2017</span>
                <span><b>Team:</b>&nbsp;TaCora Burton, Kailin Yang, Zheqi Zhu</span>
              </div>
            </div>
            <span><b>Skills:</b>&nbsp;Wireframing, Sketching, Prototyping, Research, Documentation</span>
          </div>
        </div>
      </content-block>
      <content-block title="Tl;dr" theme="two">
        <div class="block-two full-width">
          <div class="content-header">Why</div>
          <span>To improve Audible's existing interface and user experience</span>
          <div class="content-header">What</div>
          <span>Conceptualizing highlighting in audiobooks</span>
          <div class="content-header">How</div>
          <span>Conducting secondary research and examining each aspect of the existing interface to find pain points and design improvements</span>  
        </div>
      </content-block>
      <content-block title="Design Process" theme="three">
      </content-block>
      <content-block title="Problem Framing" theme="two">
        <div class="block-four full-width">
          <div class="content-header">Problem Space</div>
          <div class="full-width columns">
            <div class="text">
              <p>We were tasked (under the time constraint of 24-hours) to examine Amazon Audible's current interface and methodology for highlighting sections of audiobooks and bookmarking these sections for later use.</p>
              <p>Currently, Audible has a "clip" feature, which selects the previous 30 seconds prior to tapping the button.</p>
              <p>Our research and experiencing mapping ultimately demonstrated that this functionality does not correspond with how users generally expect the highlighting function to work.</p>
            </div>
            <img class="current-design-image" src="@/assets/projects/voice-highlighting/current-design.png">
          </div>
        </div>
      </content-block>
      <content-block title="Research" theme="four">
        <div class="block-five full-width">
          <p>From our research, it is clear that users often are not simply sitting in one place while listening to audiobooks. This becomes problematic for Audible's current design (as of Fall 2019) that requires users to be present near the phone and tap the "clip" button and highlight sections of audio for later. This directly contradicts how most users are interacting with their device of choice for using the Audible app.</p>  
        </div>
      </content-block>
      <content-block title="Proposed Design" theme="two">
        <div class="block-six full-width">
          <div class="content-header">Design Overview</div>
          <p>We introduced Alexa voice commands to the application in order to effectively highlight in audiobooks. This leverages Amazon's existing technologies and provides a clear solution for "clipping" or highlighting in audiobooks, particularly after we found that the majority of users do not stay near their device while listening to audiobooks.</p>
          <div class="content-header">Design Content</div>
          <p>After confirming permissions, when users turn on the feature for the first time, a short tutorial explaining how to use the voice commands will take users through the steps of the voice commands, as well as provide a list of available voice commands. We decided on this functionality as a way to allow users who are multitasking (which is the majority) the ability to still highlight certain sections of an audiobook.</p>
          <div class="workflow-steps">
            <div class="step">
              <h1>1</h1>
              <img src="@/assets/projects/voice-highlighting/workflow-one.png">
            </div>
            <div class="step">
              <h1>2</h1>
              <img src="@/assets/projects/voice-highlighting/workflow-two.png">
            </div>
            <div class="step">
              <h1>3</h1>
              <img src="@/assets/projects/voice-highlighting/workflow-three.png">
            </div>
          </div>
          <p>Then, addressing how to give users feedback when they clip, using other voice commands such as "Alexa, pause," gives immediate auditory feedback, but <b>clipping does not</b>. Therefore, we decided to add an auditory "ding" that plays when a user successfully complete the voice command of clip. This provides feedback to the user knowing that their clip has been successfully saved. This also allows to continue the audiobook after clipping <b>without pausing the audiobook</b>. If this option proves distracting, (although our user testing showed no issue with a short auditory ding), users have the option in settings to turn off the ding and change the feedback to something else entirely (such as visual feedback to confirm a clip occurred).</p>
          <p>Finally, we addressed the current functionality of the clipping function using the previous 30 seconds to save as the clip when a user taps the "clip" button. We analyzed this to be problematic as the clip can occur in the middle of sentences and using time as the metric to save clips does not provide enough context with the audio clip. Therefore, in order to effectively highly, we are employing <b>Amazon's database of digital books to match the text with timestamps of the audiobook</b>. With Amazon's vast computing resources, machine learning and matching words in an audiobook to their respective words in a digital text should be possible in Amazon's backend of the app. With this functionality, <b>we would then be able to clip audiobooks by paragraph instead of by seconds</b>. The current clipping UI is clunky and provides no distinct metric which the audio clip is sized. In our iteration, we would show the waveform to give users a clear indication in the break in sentences. Then, arrows at the beginning of each sentence would be displayed so users could accurately reform and edit their saved audio clips using the voice commands. This provides a much more clear visual representation of the audio clip, as well as giving clear context through selecting a whole paragraph of text and avoids the potential for clipping while mid-sentence.</p>
          <div class="workflow-steps">
            <div class="step">
              <h1>4</h1>
              <img src="@/assets/projects/voice-highlighting/workflow-four.png">
              <span>Customizable Feedback</span>
            </div>
            <div class="step">
              <h1>5</h1>
              <img src="@/assets/projects/voice-highlighting/workflow-five.png">
              <span>Current Design</span>
            </div>
            <div class="step">
              <h1>6</h1>
              <img src="@/assets/projects/voice-highlighting/workflow-six.png">
              <span>Our Design</span>
            </div>
          </div>
          <div class="content-header">Ideation</div>
          <p>Within our short time constraint, we were still able to manage to consider many options in the problem space of highlighting. How do users save highlighted clips? How are they indexed for later? How does the actual highlighting occur? After our research, we decided to ideate on specifically how to highlight in audiobooks over other issues in the problem space as multitasking while listening to audiobooks is very commonplace, and the current (as of Fall 2017) app lacks the functionality of clipping while multitasking.</p>
          <div class="whiteboard-images">
            <div class="image">
              <img src="@/assets/projects/voice-highlighting/whiteboard-one.png">
              <span>Considering Limitations</span>
            </div>
            <div class="image">
              <img src="@/assets/projects/voice-highlighting/whiteboard-two.png">
              <span>Exploring user flow and UI</span>
            </div>
          </div>
          <div class="content-header">User Flow</div>
          <div class="user-flow-images">
            <img src="@/assets/projects/voice-highlighting/user-flow-one.png">
            <img src="@/assets/projects/voice-highlighting/user-flow-two.png">
          </div>
          <div class="content-header">User Testing</div>

        </div>
      </content-block>
      <content-block title="Reflection" theme="one">
        <div class="block-seven full-width">
          <h3>What worked?</h3>
          <p>We had a really good chemistry as a team that allowed us to experiment with unfamiliar design and research methodologies. As the point of this class, Rapid Design for Slow Change, was about how to apply classical learning of methods to practical design prompts sponsored by companies, we decided in this week and project to really push the boundaries of our problem space and exhaust all our resources and contacts to truly understand the users and interactions within this space.</p>
          <h3>What to improve for next time?</h3>
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
    name: 'voice-highlighting-content',
    components: {
      ContentBlock
    },
    data: () => ({
      content: [{text: '24-Hour Challenge', theme: 'four'},
                {text: 'Tl;dr', theme: 'two'},
                {text: 'Design Process', theme: 'three'},
                {text: 'Problem Framing', theme: 'two'},
                {text: 'Research', theme: 'four'},
                {text: 'Proposed Design', theme: 'two'},
                {text: 'Refelction', theme: 'one'}]
    }),
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
      .header-details {
        display: flex;
        margin-bottom: 20px;
        font-size: 1.2em;
        justify-content: center;
        .audible-logo {
          margin-left: 30px;
          width: 140px;
        }  
      }
      .mockup-image {
        width: 500px;
        margin: auto;
      }
      .type-label {
        background-color: #193d54;
        color: #fff;
        font-weight: bold;
        padding: 3px 18px;
        font-size: 0.8em;
        margin: 40px 0;
        box-shadow: 2px 2px #D5D5D5;
      }
      h2 {
        margin-top: 40px;
        text-align: center;
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
    .block-four {
      .columns {
        display: flex;
        justify-content: space-between;
        .text {
          width: 50%;
        }
        .current-design-image {
          width: 170px;
          margin-right: 90px;
        }
      }
    }
    .block-six {
      .workflow-steps {
        display: flex;
        justify-content: space-between;
        margin: 40px 0;
        .step {
          display: flex;
          flex-flow: column;
          font-size: 0.9em;
          img {
            width: 200px;
          }
          span {
            margin-top: 8px;
            text-align: center;
          }
        }
      }
      .whiteboard-images {
        display: flex;
        justify-content: space-between;
        .image {
          display: flex;
          flex-flow: column;
          align-items: center;
          img {
            margin-bottom: 4px;
            width: 390px;
          }
        }
      }
      .user-flow-images {
        margin-top: 20px;
        img {
          width: 50%;
        }
      }
    }
    .block-seven {
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