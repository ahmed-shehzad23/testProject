const contract_address = "0x982ab8afC3Ee513248c448d8282e7D8057AB95ba";

const abi = [{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellingWithdrawBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"admin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokensAmount","type":"uint256"}],"name":"setStakingReq","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ownerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_identifier","type":"bytes32"},{"name":"_status","type":"bool"}],"name":"setAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getSoldTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"disableInitialStage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenSymbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"tokensToEthereum_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenName","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"sellingWithdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"stakingReq","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"referredBy","type":"address"}],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onSellingWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"}];

let contract;
let connection;
let mainAccount;
let ethereumRate;
            
            window.addEventListener('load', () => {

                setInterval( function checkConnection(){
                    if(typeof(web3) === 'undefined') {
                        connection ="Metamask is not installed.";
                        $('#metamaskConnection').text(connection); 
                    
                    }

                    else {
                        
                        connection ="Connected to Metamask.";
                        console.log(connection);
                        $('#metamaskConnection').text(connection);
                        mainAccount = web3.eth.getAccounts(function(err, accounts){
                            mainAccount = accounts[0];
                            $('#referralEthereumAddress').text(mainAccount);   
                            $( document ).ready(function() {
                                    
                                isLocked();
                                circulationsOfToken();
                                myToken();
                                dividendsOf();   
                                getEthereumPrice();
                            });
                        });
                    }
                    
                    web3.version.getNetwork((err, netId) => {

                        switch (netId) {
                            case "1":
                            console.log('This is mainnet')
                            break
                            case "2":
                            console.log('This is the deprecated Morden test network.')
                            break
                            case "3":
                            console.log('This is the ropsten test network.')
                            break
                            case "4":
                            console.log('This is the Rinkeby test network.')
                            break
                            case "42":
                            console.log('This is the Kovan test network.')
                            break
                            default:
                            console.log('This is an unknown network.')
                        }
                    })
                }
                ,3000);

                if (window.ethereum) {
                    window.web3 = new Web3(ethereum);
                    try {

                        // Request account access if needed
                        ethereum.enable();
                        // Acccounts now exposed
                        web3.eth.sendTransaction({/* ... */});
                    } 
                    catch (error) {
                    // User denied account access...
                        
                    }
                
                }

                
                
                contract = web3.eth.contract(abi).at(contract_address);
        
            });

            

            function isLocked() {

                web3.eth.getAccounts(function(err, accounts){
                    
                    if (err != null) {
                        
                        console.log(err)
                    
                    }
                    else if (accounts.length === 0) {
                        
                        console.log('MetaMask is locked')
                    
                    }
                    else {
                        
                        console.log('MetaMask is unlocked')
                    
                    }
                    
                });
            }

            function getBalanceOfAccount(){

                web3.eth.getBalance(mainAccount, function(err,res){
  
                    if (!res.c[1])
                    {
                        var combine = (res.c[0]*100000000000000)/1000000000000000000;
                        $('#getBalance').text(combine);
                    }
                    else
                    {
                        var combine = ((res.c[0]*100000000000000)+(res.c[1]))/1000000000000000000;
                        $('#getBalance').text(combine);
                    }        
                });    

            }

            function getEthereumPrice(){
                var json = new XMLHttpRequest(); // start a new variable to store the JSON in
                json.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
                        var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays

                        for(var i=0;i<object.length;i++){   // looping through json

                        var item = object[i];
                            if(item["symbol"] === "ETH"){   // finding when symbol is ETH
                                var usdValue = "$" + item["price_usd"];    // Fetching price_usd value
                                ethereumRate = parseInt(item["price_usd"]);
                                
                                buyPrice();
                                sellPrice();
                                getEthereumBalance();
                                getBalanceOfCommunityWallet();
                                getBalanceOfTradingFundsWallet();
                            }
                        }
                    }
                };  


                json.open(
                "GET", // method
                "https://api.coinmarketcap.com/v1/ticker/ethereum/", // url
                true // async
                ); // initialise the request
                json.send();
            }

            ///////////////////////////////////////////////////////////////////////////////////////////////////////////

            function circulationsOfToken(){

                contract.totalSupply.call((error, result) => {

                if(error) {

                    return console.log(error);

                }
                $('#circulationOfToken').text((result/1000000000000000000).toString().substr(0,10));        

                });
            }  

            function getEthereumBalance(){

                contract.totalEthereumBalance.call((error, result) => {

                if(error) {

                    return console.log(error);

                }
                $('#ethereumBalance').text((result/1000000000000000000).toString().substr(0,10));
                $('#ethereumBalanceUSD').text(((result/1000000000000000000)*ethereumRate).toString().substr(0,10));       

                });
            }

            async function getBalanceOfCommunityWallet(){
                
                await web3.eth.getBalance("0xa6ac94e896fBB8A2c27692e20B301D54D954071E", function(err,res){

                    if (!res.c[1])
                    {
                        var combine = (res.c[0]*100000000000000)/1000000000000000000;
                        $('#getBalanceOfCommunityWallet').text(combine.toString().substr(0,10));
                        $('#getBalanceOfCommunityWalletUSD').text((combine*ethereumRate).toString().substr(0,10));
                    }
                    else{
                        var combine = ((res.c[0]*100000000000000)+(res.c[1]))/1000000000000000000;
                        $('#getBalanceOfCommunityWallet').text(combine.toString().substr(0,10));
                        $('#getBalanceOfCommunityWalletUSD').text((combine*ethereumRate).toString().substr(0,10));
                    }        
                });    
            
            }

            async function getBalanceOfTradingFundsWallet(){
                
                await web3.eth.getBalance("0x40E68DF89cAa6155812225F12907960608A0B9dd", function(err,res){
    
                    if (!res.c[1])
                    {
                        var combine = (res.c[0]*100000000000000)/1000000000000000000;
                        $('#getBalanceOfTradingFundsWallet').text(combine.toString().substr(0,10));
                        $('#getBalanceOfTradingFundsWalletUSD').text((combine*ethereumRate).toString().substr(0,10));
                    }
                    else{
                        var combine = ((res.c[0]*100000000000000)+(res.c[1]))/1000000000000000000;
                        $('#getBalanceOfTradingFundsWallet').text(combine.toString().substr(0,10));
                        $('#getBalanceOfTradingFundsWalletUSD').text((combine*ethereumRate).toString().substr(0,10));
                    }        
                });    
            
            }

            function buyPrice(){

                contract.buyPrice.call((error, result) => {
                    if(error) {

                        return console.log(error);

                    }
                    $('#buyPrice').text((result/1000000000000000000).toString().substr(0,10));  
                    $('#buyPriceUSD').text(((result/1000000000000000000)*ethereumRate).toString().substr(0,10));      

                }); 
            }

            function sellPrice(){

                contract.sellPrice.call((error, result) => {

                    if(error) {

                        return console.log(error);

                    }
                    $('#sellPrice').text((result/1000000000000000000).toString().substr(0,10));        
                    $('#sellPriceUSD').text(((result/1000000000000000000)*ethereumRate).toString().substr(0,10)); 
                });
            }

            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
            function myToken(){

                contract.myTokens.call((error, result) => {

                    if(error) {

                        return console.log(error);

                    }
                    $('#myToken').text((result/1000000000000000000).toString().substr(0,14));   
                    if (!result.c[1])
                    {
                        var combine = (result.c[0]*100000000000000);//1000000000000000000;
                    }
                    else{
                        var combine = ((result.c[0]*100000000000000)+(result.c[1]));//1000000000000000000;
                    }     
                    estimatedValueOfTokens(combine);
                });     

            }

            function dividendsOf(){

                contract.dividendsOf.call(mainAccount, function(error, result) {

                    if(error) {

                        return console.log(error);

                    }
                    else
                    {
                        var dividend = result/1000000000000000000;
                        treasureKeyDividends(dividend);
                    }
                });
            }     

            function treasureKeyDividends(temp){

                var condition = true;
                contract.myDividends.call(condition, function(error, result) {

                    if(error) {

                        return console.log(error);

                    }
                    var temp1 = (result/1000000000000000000);
                    var totalDividends = temp1;
                    treasureKeyDividend = totalDividends - temp;
                    nonTreasureKeyDividend = temp;
                    $('#treasureKeyDividends').text((treasureKeyDividend).toString().substr(0,14));  
                    $('#nonTreasureKeyDividends').text((nonTreasureKeyDividend).toString().substr(0,10));  
                    $('#allDividend').text((totalDividends).toString().substr(0,14));
                    $('#availableForWithdraw').text((totalDividends).toString().substr(0,14));        
                });
            }  


            function estimatedValueOfTokens(tokens){

                contract.tokensToEthereum_.call(tokens, function(error, result) {

                    if(error) {

                        return console.log(error);

                    }
                    $('#estimatedValueOfTokens').text((result/1000000000000000000).toString().substr(0,10));        
                });
            }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////            

            function withdraw(){
                    
                contract.withdraw.sendTransaction(
                    {gasPrice: web3.toWei(4.1, 'Gwei')}, 
                    (error, result) => {
                        
                        if(error) {
                            return console.log(error);
                        }
                        console.log("txhash: " + result); 
                    }
                );
            }

            function reinvest(){
                    
                contract.reinvest.sendTransaction(
                    {gasPrice: web3.toWei(4.1, 'Gwei')}, 
                    (error, result) => {
                        
                        if(error) {
                            return console.log(error);
                        }
                        console.log("txhash: " + result); 
                    }
                );
            }

            function sellingWithdraw(){
                contract.sellingWithdraw.sendTransaction(
                    
                    {gasPrice: web3.toWei(4.1, 'Gwei')}, 
                    (error, result) => {
                        
                        if(error) {
                            return console.log(error);
                        }
                        console.log("txhash: " + result); 
                    }
                );
            }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////            

            function buy() {

                let address = $('#address').val();
                let val= ($('#buyvalue').val()*1000000000000000000);  
                var tx = {from : mainAccount};
                contract.buy.sendTransaction(
                    address,
                    {from: mainAccount, gas: 3000000, value: val}, function(err, res){
                        if(err) {
                            return console.log(err);
                        }
                        console.log("txhash: " + res);
                    }
                )

            }

            function sell(){

                let val= ($('#sellvalue').val()*1000000000000000000);
                contract.sell.sendTransaction(
                    val,
                    {gasPrice: web3.toWei(4.1, 'Gwei')}, 
                    (error, result) => {
                        
                        if(error) {
                            return console.log(error);
                        }
                        console.log("txhash: " + result); 
                    }
                );
            }

            function transfer() {

                let address = $('#transferaddress').val();
                let amount = ($('#transferamount').val()*1000000000000000000);   
                contract.transfer.sendTransaction(
                    address,amount, 
                    {gasPrice: web3.toWei(4.1, 'Gwei')}, 
                    (error, result) => {
                    
                        if(error) {
                            return console.log(error);
                        }
                        console.log("txhash: " + result); 
                    }
                );
            }