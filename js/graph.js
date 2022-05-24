var nodes = new vis.DataSet([
    { id: 1, label: "Disconnection", explanation: "To actively change conditions (regarding inequality) it is required for an agent to be a 'problem owner' which causes behavioural change. For this to occur, it is required that the agent is connected to the problem. However, there are indications that portions of the population are disconnected from society causing passive behaviour. Further details about this process can be found in HYPERLINK." },
    { id: 2, label: "Democratic power", explanation: "Democracy is influenced by inequality, however the exact mechanism is unclear. Two opposing theorems are the 'redistributive perspective' and the 'unequal power perspective' which state that either democratic power resorts to the median voter or by the powerful few respectively. Further details about their characteristics can be found in HYPERLINK." },
    { id: 3, label: "Unawareness", explanation: "To create an opinion and consequential policy regarding inequality, it is required to be aware of the (current) situation. However, there are multiple indications that information and policies revolving around inequality are either unknown or misinformation has occurred. Further details about this process can be found in HYPERLINK." },
    { id: 4, label: "Stratification", explanation: "Within society that are population groups which have their specific characterisations. The characteristics causes that they experience different opportunities and effects from policies but also have different behaviour. Further details about these characteristics can be found in HYPERLINK." },
    { id: 5, label: "Education", explanation: "Education is a pivotal aspect in the development of human capital of an individual and dictates in large portions the opportunities the persons has later in life. When differences occur within the educational system the outcome will experience change. Further details revolving around the educational system can be found in HYPERLINK." },
    { id: 6, label: "Policy approval", explanation: "To cause change, it is required to enforce policies. The process how policies are drafted are of large importance to the opportunities to alter the system. Further details about this process can be found in HYPERLINK." },
    { id: 7, label: "Measurements", explanation: "To know the present situation and the caused effects of policies it is required to have proper measurements. We find that there are four broad representation methods revolving around inequality: 1. Lorenz-curve based indices, 2. Generalized entropy based indices, 3. Ratio based indices, and 4. Poverty based indices. Further details about the characteristics of these measurements can be found in HYPERLINK." },
    { id: 8, label: "Economic growth", explanation: "The fortune of society is largely bound by its economic growth, indicating increasing economic opportunities. It is desired for an economy to have high economic growth to spread improving conditions among its population. Further details about this characteristics can be found in HYPERLINK." },
    { id: 9, label: "Health", explanation: "One of the most important characteristics for individuals to enjoy life is good health. As such, governments have a duty to attempt to provide good health and improve conditions where possible. Further details about this characteristics can be found in HYPERLINK." },
    { id: 10, label: "Opportunity inequality", explanation: "Economic inequality consists out of three branches, one of them being opportunity inequality. This type of inequality considers the opportunity to change socio-economic position (and tightly related income and wealth characteristics). This type of inequality is related the human capital one has and can develop. Further details about the characteristics of opportunity inequality can be found in HYPERLINK." },
    { id: 11, label: "Wealth transfers", explanation: "An important hallmark of wealth is that it can be transferred between individuals. As such, assistance can be given from parent to child, via either in vivo transfers or inheritance, when they are need of financial funds. Further details about the characteristics of these transfers can be found in HYPERLINK." },
    { id: 12, label: "Mobility", explanation: "Mobility assigns the procedure to move up and down the socio-economic ladder. This can be measured from a inter- and intra-generational perspective, and from a relative and a absolute perspective. These differences state whether an individual improves in conditions in absolute terms or relative compared to a point of reference. Further details about the characteristics of mobility can be found in HYPERLINK." },
    { id: 13, label: "Real estate", explanation: "An important asset in the portfolio of citizens is real estate. Either it cause a large portion of their expenses when they are renting or represents the largest portion of their wealth. In either way, it is pivotal in their life and also coordinates inequalities. Further details about the characteristics of real estate can be found in HYPERLINK." },
    { id: 14, label: "Wealth inequality", explanation: "Economic inequality consists out of three branches, one of them being wealth inequality. This type of inequality considers all wealth retained by an individual and is intimately connected to the life-cycle of an individual. Further details about the characteristics of wealth inequality can be found in HYPERLINK." },
    { id: 15, label: "Financialization", explanation: "The economical phenomenon to produce income from trade in financial assets (most often leveraging debt) is called financialization. Since the 1980s this has been an increasing important pathway to generate income using wealth and has been interacting with the economy. Further details about the characteristics of financialization can be found in HYPERLINK." },
    { id: 16, label: "Income inequality", explanation: "Economic inequality consists out of three branches, one of them being income inequality. This type of inequality considers income differences between individuals and is intimately connected to the type of job a person can enrol into. Further details about the characteristics of income inequality can be found in HYPERLINK." },
    { id: 17, label: "Technology", explanation: "Technological changes are an important driver in driving productivity upwards. While doing so, it creates new job opportunities but also causes other jobs to become redundant influencing the jobs market. Moreover, for technological change, investments in R&D are required to invent new opportunities. Further details about the characteristics of technology can be found in HYPERLINK." },
    { id: 18, label: "Globalization", explanation: "Due to increased connectivity between countries, economies have become increasingly entangled. It has offered opportunity to produce services & goods in country to the country where it will be consumed. This has notably changed operations of (multinational) corporations and their supply in the consumption and job market. Further details about the characteristics of technology can be found in HYPERLINK." },
    { id: 19, label: "Welfare state", explanation: "An hallmark of Western societies is the welfare state which supports health and social security. As such, it aids the unfortunate who endure problematic situations in life and aims to provide suitable living conditions for all. This guarantee in providing suitable living conditions for all has important consequences from a redistributive perspective. Further details about the characteristics of the welfare state can be found in HYPERLINK." },
    { id: 20, label: "Labour bargaining", explanation: "An important procedure in finding a job and asserting income and other parameters (such as social security) is mediated by labour bargaining. In this process the labour market clears supply and demand. Further details about the characteristics of labour market can be found in HYPERLINK." },
    { id: 21, label: "Taxes & benefits", explanation: "The most important direct policy tool of a government to influence income and wealth (inequalities) is the tax & benefit system. It posses opportunity to direct economic processes and influence the income and wealth distribution. Further details about the characteristics of tax & benefits can be found in HYPERLINK." },
    { id: 22, label: "Undocumented inequality", explanation: "Measurements will most often run into issues with hiatuses in databases. While some of these hiatuses are accidental, some are deliberate intentions of individuals to  decreases the tax base of their income and assets, i.e., tax avoidance and evasion. Further details about the characteristics of undocumented inequalities can be found in HYPERLINK." },
    { id: 23, label: "Public perception", explanation: "To cause change, it is desired that the change is wanted by the public causing that the enforcement of the policy gains less opposition. Moreover, drafting policies can be influenced by the desire of the public to have such a policy enforced. As such, public perception is of large importance to the possible directions of society. Further details about the characteristics of public perception can be found in HYPERLINK." },
    { id: 24, label: "Data collection", explanation: "A crucial part to knowing the situation revolving around inequality concerns how data is being collected. Different methods can lead to different outcomes because of their characteristics/ We find that there are three rudimental options to collect data revolving around economic inequality: 1. Tax data, 2. Survey data, and 3. Rich lists. Further details about these data collection methods can be found in HYPERLINK." },
    { id: 25, label: "Financial resources", explanation: "It is not always perfectly clear whether wealth or income is having an impact on a certain parameters. As a compromise it has been chosen to use financial resources as an overarching term which integrates both income and wealth when further distinction between the parameters cannot be made." },
]);

var edges = new vis.DataSet([
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 25 },
    { from: 2, to: 6 },
    { from: 3, to: 4 },
    { from: 3, to: 21, dashes: true, explanation: "There are indications that unawareness exists about specific tax & benefit policies. These misinformations causes altered support for these specific tax & benefits, most notoriously the inheritance tax endures large scrutiny. This interaction has not been reviewed in further detail within this thesis." },
    { from: 4, to: 5 },
    { from: 4, to: 9 },
    { from: 4, to: 12 },
    { from: 5, to: 9 },
    { from: 5, to: 12 },
    { from: 5, to: 25 },
    { from: 6, to: 7 },
    { from: 7, to: 22 },
    { from: 7, to: 23 },
    { from: 8, to: 17, dashes: true, explanation: "There are indications that increased technology increases economic growth by increasing productivity. This interaction has not been reviewed in further detail within this thesis." },
    { from: 8, to: 25 },
    { from: 9, to: 10 },
    { from: 9, to: 25 },
    { from: 10, to: 11 },
    { from: 11, to: 14 },
    { from: 11, to: 12 },
    { from: 12, to: 13 },
    { from: 12, to: 16 },
    { from: 13, to: 14 },
    { from: 13, to: 15, dashes: true, explanation: "There are indications that increased financialization has entered the real estate market causing inflationary effect on housing prices. This interaction has not been reviewed in further detail within this thesis." },
    { from: 14, to: 15 },
    { from: 14, to: 16 },
    { from: 14, to: 21 },
    { from: 14, to: 25 },
    { from: 15, to: 16 },
    { from: 15, to: 17, dashes: true, explanation: "There are indications that increased financialization causes reduction in investments and as such reduces technological development. This interaction has not been reviewed in further detail within this thesis." },
    { from: 16, to: 17 },
    { from: 16, to: 18 },
    { from: 16, to: 19 },
    { from: 16, to: 20 },
    { from: 16, to: 21 },
    { from: 16, to: 25 },
    { from: 18, to: 22, dashes: true, explanation: "There are indications that increased globalization enables wealth (and income) to be hiden from tax agents by using tax heavens. This interaction has not been reviewed in further detail within this thesis." },
    { from: 20, to: 21 },
    { from: 21, to: 22 },
    { from: 21, to: 23 },
    { from: 22, to: 24 },
]);

var container = document.getElementById("network");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {};
var network = new vis.Network(container, data, options);

network.on( 'click', function(properties) {
    var clickedNodes = nodes.get(properties.nodes);
    console.log('clicked nodes:', clickedNodes);

    var clickedEdges = edges.get(properties.edges);
    console.log('clicked edges:', clickedEdges);
    
    if(clickedNodes.length > 0){
        node = clickedNodes[0]
        document.getElementById("sidebarTitle").innerHTML = node["label"]
        document.getElementById("sidebarContent").innerHTML = node["explanation"]
        $("#infoModal").modal();
    }
    else if(clickedNodes.length == 0){
        document.getElementById("sidebarTitle").innerHTML = ""
        document.getElementById("sidebarContent").innerHTML = ""
    }
});