# Salesforce AI Associate
<!-- Versiones -->
## Autor: Adrian Arribas
Basado en este video: https://www.youtube.com/watch?v=bzFOLG0GzMA
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

There is different kind of intelligences. Some AIs are good for one task but they are inept for others.

**Numeric Predictions**
- Is the customer likely to renew their subscription?
- Are you at risk for a medical condition?
- Will there be high demand on the power grid this evening?

**Classification**
First step in taking action to derive value generally.
- Is this plant edible or poisonous?
- Is this email phishing or legitimate?

**Robotic Navigation**
Navigate a changing environment.

**Supply Chain Optimization**
Optimize a supply chain.

**Language Processing**
Natural Language Processing (NLP) converts words into structured information.

**Terms**

- **Machine Learning**: Computers learn through data patterns, not explicitly defined algorithms.
  
- **Data**: 
  - Structured Data (e.g., Spreadsheets) vs Unstructured (Text, Audio, Images).
  
- **Learning**: 
  - Supervised vs Unsupervised Learning.

- **Neural Networks**: Systems mimicking human brain structures.

- **Natural Language Understanding and Processing (NLU, NLP, NLG)**:
  - NLP vs NLU: NLP processes language, while NLU focuses on understanding context.
  - **BONUS**: NLU enhances human-machine interaction.

- **Named Entity Recognition (NER)**: Identifies specific entities within text.

- **Deep Learning**: Large neural networks for complex pattern recognition.

**Common Concerns on Generative AI**
- Hallucinations
- Data Security
- Plagiarism
- User Spoofing
- Sustainability


## Data for AI

**What is Data**

Data are individual facts, or items of information. A collection of data is a collections of facts.

Quantitative vs Qualitative 

- Quantitative: Data expressed in numbers (e.g., statistics, measurements) used for objective analysis.

- Qualitative: Descriptive data capturing characteristics or qualities (e.g., country of origin, name, hair color). It provides insights through subjective interpretation, not numeric measurement.
  - Ordinal: Can be ordered such as case priority
  - Nominal: Cannot be ordered for example the Contact salutation picklist

Good Data Traits

| **Característica**          | **Descripción**                                                                                                                        |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **High Volume**             | A large amount of relevant, available data means that there’s a better chance you'll have what you need to answer your questions.                                      |
| **Historical**              | Data that goes back in time allows you to see how the present situation arose due to patterns that have arisen over time, such as looking at sales trends over the last 10 years to see increases or decreases. |
| **Consistent**              | As things change, data should be adjusted for consistency. Salary and price data adjusted for inflation is a good example of this.                                    |
| **Multivariate**            | Data should contain both quantitative (numerically measurable) and qualitative (characteristic, not numerically measurable) variables. The more variables in the data, the more you can discover from it. |
| **Atomic**                  | The more finely detailed the data, the more you are able to examine it at various levels of detail.                                                                   |
| **Clean**                   | For data to be useful, it should be accurate, complete, and free from errors.                                                                                        |
| **Clear**                   | Data should be written in terms that can be easily understood, not in code. For example, housing values “single family” is much easier to understand than “1Fam”.     |
| **Dimensionally Structured**| An accessible way to structure data is to organize it into two types: Dimensions (qualitative values) and Measures (quantitative values). This is the organizational structure Tableau uses when interpreting data. |
| **Richly Segmented**        | Groups, based on similar characteristics, should be built into data for easier analysis. For example, data about movies could be grouped by genre (action, science fiction, romance, comedy, and so on). |
| **Of Known Pedigree**       | In order to trust the data, you should know its background—where it comes from and how it has since been altered.                                                     |

**Data Aggregation**

Data can be aggregated
| **Aggregation Function** | **Description**                                                                                                                    |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Sum**                  | Calculates the total sum of a set of values. Useful for obtaining overall totals, like total sales or revenue.                     |
| **Mean**                 | Calculates the average value of a data set. Helps determine the central tendency, such as the average price of products.           |
| **Minimum**              | Finds the lowest value in a data set. Useful for identifying the smallest value, like the shortest delivery time.                  |
| **Maximum**              | Finds the highest value in a data set. Helps identify the largest value, like the highest sale of the month.                       |
| **Count**                | Counts the number of elements in a data set. Useful for understanding frequency or quantity, such as the number of orders.         |
| **Median**               | Finds the central value in an ordered data set, splitting it into two equal halves. Useful in data analysis when the mean may be skewed by outliers. |


**Data visualization con Tableau**

Bonus

Get Granular

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