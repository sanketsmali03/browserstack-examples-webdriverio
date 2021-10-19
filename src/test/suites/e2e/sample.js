var fs = require('fs');
var path = require('path');
var sleep = require('sleep');
describe('Order a product', () => {

  beforeEach('Open StackDemo', () => {
    browser.url('https://the-internet.herokuapp.com/upload')
    //browser.url('');
    //browser.url("https://www.bellesdemeures.com/en/listings/holiday-rentals/tt-4-tb-2-pl-46128/175040779/");
  })

  afterEach('clear sessionstorage', () => {
    browser.execute(() => sessionStorage.clear())
  })

  it('Login and order a product', () => {
    //var data = fs.readFileSync('/Users/nithyamani/Desktop/images/sample.jpg');
    //var convertedData = new Buffer.from(data, 'base64');
   // browser.pushFile('/data/local/tmp/sample.jpg', '/Users/nithyamani/Desktop/images/sample.jpg');
    //$('#file-upload').click();
    //browser.switchContext('NATIVE_APP');
    //await driver.context('NATIVE_APP')
    //$('[name="Photo Library"]').click();
    //var classname = $('XCUIElementTypeImage');
    //classname[0].click();
    //$('[name="Choose"]').click();

    //var contexts = driver.contexts();
    //driver.switchContext(contexts[1]);
    //$('#file-submit').click();

  //  $('#file-upload').setValue('/data/local/tmp/sample.jpg');
  //  $('#file-submit').click();
    //const footer  = $('//*[@id="__next"]/div/div/footer/div/div/div/span');
    //browser.execute('return arguments[0].scrollIntoView();',footer);
    //const elem = $('#signin') // or $(() => document.getElementById('elem'))
    //elem.click();
    //browser.execute('return arguments[0].click();',elem);

    // const popup = $('#didomi-notice-agree-button');
    // popup.click();
    // const button = $("//*[@id='ContactEmail_LastName']//ancestor::form//a[contains(@class, 'formSubmit')]")
    // button.scrollIntoView();
    // //browser.execute('return arguments[0].scrollIntoView();',button);
    // browser.execute('return arguments[0].click();',button);

    const file = "../../../../images/sample.jpg";
    const filePath = path.join(__dirname, file)
    console.log(filePath);
    const data = fs.readFileSync(filePath)
    const convertedData = new Buffer.from(data).toString('base64')
    //const mobilePath = `/data/local/tmp/${file.split('/')[5]}`
    //const mobilePath = `/private/var/mobile/Media/DCIM/${file.split('/')[5]}`
    const mobilePath = `/DCIM/100APPLE/${file.split('/')[5]}`
    browser.pushFile(mobilePath, convertedData)
    //this.photosUploadInput.sendKeys([mobilePath])
    //$('#drag-drop-upload').click();
    //$('#file-upload').setValue([mobilePath]);
    
    new Promise(r => setTimeout(r, 2000));
    $('#file-upload').waitForExist();
    sleep.sleep(10);
    $('#file-upload').click();
    //element.click()
    browser.switchContext('NATIVE_APP')
    $('[name="Photo Library"]').waitForExist();
    $('[name="Photo Library"]').click();
    // $('[name="Browse"]').waitForExist();
    // $('[name="Browse"]').click();

    //element = browser.waitForExist('Photo Library')
    //element.click()
    //new Promise(r => setTimeout(r, 2000));
    //var xcuitElement = $('XCUIElementTypeImage').waitForExist();
    //element = browser.waitForExist('XCUIElementTypeImage')
    //xcuitElement[0].click();
    $('~Recently Added').click();
  
    // new Promise(r => setTimeout(r, 5000));
    // $('[name="Choose"]').waitForExist();
    // $('[name="Choose"]').click();
    //element = $('[name="XCUIElementTypeCollectionView"]').click();
    //element[0].click()
    
    // //element = browser.waitForExist('Choose')
    new Promise(r => setTimeout(r, 10000));
    contexts = browser.getContexts();
    browser.switchContext(contexts[1])
    
    // $('#file-submit').click();

    //to confirm if the image was successfully uploaded or not
    //let retrievedBase64Data = browser.pullFile(`/data/local/tmp/${file.split('/')[5]}`);
    // let retrievedBase64Data = browser.pullFile(`/private/var/mobile/Media/DCIM/${file.split('/')[5]}`);
    //let retrievedBase64Data = browser.pullFile(`/DCIM/100APPLE/${file.split('/')[5]}`);
    let retrievedBase64Data = browser.pullFolder('./');
    fs.writeFile('../../../../images/sample_folder.zip', retrievedBase64Data, {encoding: 'base64'}, function(err) {
      console.log('File created');
    });

    //browser.pullFolder('/private/var/mobile/Media/DCIM/');

  })
})

