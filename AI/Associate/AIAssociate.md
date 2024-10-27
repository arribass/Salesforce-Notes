# Salesforce AI Associate
<!-- Versiones -->
<!-- tabla de versiones -->
| Version | Fecha | Descripción |
| ---     | ---      | ---         |
| 0.1     | 29/04/2024   | Documento de estudio para el examen de Salesforce AI Associate|

## Introducción
The Salesforce AI Associate exam evaluates foundational knowledge in AI within the Salesforce ecosystem. This document collects essential concepts, with summaries based on the Focus on Force study guide, concrete answers to test questions, and a personalized question bank.

| Concept  | Description |
| ---       | ---         |
| Scoring| 65%         |
| Time    | 70 minutes |
| Questions | 40          |

| Syllabus                          | Weighage |
| ---                               | ---       |
|AI Capabilities in CRM       |8%        |
|AI Fundamentals	            |17%        |
|Data for AI |36%        |
|Ethical Considerations of AI                   |39%        |

## AI Capabilities in CRM

Categories fpr the capabilities:
- Discovery Insights, clarity about Company customer
- Make Prediction Outcomes
- Recommend the best action
- Automate Tasks
- Generate content

**Sales**
- Boost win rates by prioritizing Lead and Opps most likely to convert
- Discover Pipeline trends and take action by analyzing sales cycles with prepackaged best practices
- Maximize time spent selling by automating data capture
- Generate relevant outreach automatically with CRM data

Elevate your **sales** game by using historical sales Data to predict the best possible Sales Opportunity 

**Case Scenarios:**

An inside Sales Rep has a list of Leads organized by how likely they are to convert. That is going to spend his time connecting with those customers at the top of the list and avoiding the cold leads.

Predictive forecasting can flag opportunities for review if the expected revenue entered by their sales rep does not match closely with the predicted revenue based on Historical Data.

**Service**
- Accelerates Case Resolution by Automatically predicting and populating fields
- Increase call deflection by resolving routine Custom Requests on real time Digital channels
- Create Tailored Service replies. Knowledge Articles and Work Summaries automatically with CRM Data

In Sales Cloud every day your Company receives emails from customers looking for support and many companies someone has to read those emails and rout them to the right people. They are using time classifying emails that could be spent actually providing support. AI can help by reading trough those emails and doing the case classification based on past inquiries and then automatically routing those emails to the right person. AI could scan those notes on real time and recommend relevant articles that are known to solve similar problems.

**Case Scenario:**

You have a customer who's more comfortable trying to solve their own issues instead of tying up an agent they can start a conversation with a chatbot. Chatbots use AI to understand what people are asking and how to respond in a meaningful way. This frees up agents to provide more personal care to customers who really need it.

**Marketing**
- Know your audience more deeply by uncovering consumer insights and making predictions.
- Engage more effectively by suggesting when and on which channels to reach out.
- Create personalized messages and content based on consumer preferences.

Will your customers 
- Open your emails 
- Click trough it
- Act on it
- Unsubscribe

These are yes or no questions that AI can use to make predictions about future recipients. This way you can send emails to prospects who are likely to open them without unsubscribing and know the right channel to use for every customer. 

Einstein engagement frequency predicts the right number of communications to send without going overboard.

### Tools

**Einstein Bots**

Allows you to build a smart assistant into your customers channels like chats, messages or voice.

**Einstein Prediction Builder**

EPB is a click point wizard that allows you to make custom predictions on your non encrypted **Salesforce** Data.

Examples:
- Is this ZIP Code a good Opp?
- Will this customer Attrit?
 
**Einstein Nex Best Action**

Next Best Actions are Ruled Based and Predictive Models that provide anyone in your business with intelligent, contextual recommendations and offers.

**Generative AI with Einstein**

Allows business to generate personalized and relevant content by grounding LLMS(Large Language Models) in their CRM data safely and securely using conversational intelligence to help you close deals faster, resolve service inquiries faster etc...

For AI Associate you **DONT** need to know how to implement these tools into your platform but why would you use them and the circumstances.


### Bonus Tips

- Einstein Readiness Assessor can help you determine which tools have the pre-reqs in place, so that you know what you are closest to being ready for.
- AI can help you create Lead Scores in Sales Cloud and can help deflect Cases in Service Cloud.
- Einstein Discovery needs at least 400 rows with outcome values to build a model, more than one driving variables, and the more relevant historical data, the better.

## AI Fundamentals
## Data for AI
BIAS
## Ethical Considerations of AI

When talking about inclusive design of AI we think about 3 things:

**RECOGNIZE EXCLUSION**

When we solve problems using our own biases, exclusion happens. We need to recognize exclusion before we can address it.

**LEARN FROM DIVERSITY**

Human beings are the real experts in adapting to diversity

**SOLVE FOR ONE EXTEND TO MANY**

Focus on whats universally important to all humans

### Guidelines for Trusted Generative AI

1. Accuracy 

Balance:
- Accuracy
- Precision
- Recall

1. Safety

Conducting Bias, explainability and robustness assessments and red teaming.

Red Teaming is the practice to give experts access to restricted areas and simulate cyberattacks hence identifying vulnerabilities and weaknesses in the system.

3. Honesty

Have consent to use data when training models and disclose when AI creates content or delivers it.

4. Empowerment

Automation vs Augmentation... finding the balance

5. Sustainability

Develop right sized models

### Trusted AI Principles
1. Responsible
2. Accountable
3. Transparent
4. Empowering
5. Inclusive


![alt text](image.png)