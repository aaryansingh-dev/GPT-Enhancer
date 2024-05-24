// Property of GPTEnhancer
// No more updates to be released
// Might not work on some devices after new CHATGPT UI update. 

class ConversationSubmitter
{   
    constructor() {

    // // version text
    // this.version_text = document.createElement("p");
    // const currentVersion = chrome.runtime.getManifest().version;
    // this.version_text.textContent = `Version: ${currentVersion}.`;
    // this.version_text.classList.add('version_text');
    

    // //website link
    this.website = document.createElement("a");
    this.website.href = "https://gptenhancerteam.wixsite.com/gpt-enhancer";
    this.website.textContent = 'Visit our website';
    this.website.classList.add('website_link');
    
    // create div for submit and pause button
    this.buttonDiv = document.createElement("div");
    this.buttonDiv.style.margin = "3px";
    
    //submit button
    this.Submitbutton = document.createElement('button');

    // Create the pauseButton element
    this.pauseButton = document.createElement('button');
    this.pauseButton.textContent = 'Pause';
    this.pauseButton.classList.add('pause-button');
    // alexroumi - contributor

    // Create the text area element
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('input-chunk')
    this.textarea.placeholder = 'Time between chunks in secs';
    this.textarea.style.margin = '15px 5px 5px 10px';
    // Jaareet - contributor
    

    // create Website button
    // this.website_button = document.createElement('button');
    // this.website_button.text = 'GPTEnhancer Website';
    // this.website_button.classList.add('website_button');
    

    this.createButton();
    this.insert_buttons();

    // call fucntions to apply style
    this.applyButtonStyles();
    this.applyPauseStyle();
    this.applyChunkTextStyle();
    this.applyWesbiteTextStyle();
    this.delay(5000);
    
    this.isPaused = false;
    //this.submit = this.submit.bind(this);
    this.pauseButton.addEventListener('click', () => this.pause());
    this.Submitbutton.addEventListener('click', () => this.submit());

    }

    // submit logic at end
    // when clicked on paue button
    pause()
    {   
        this.isPaused = true;
        this.pauseButton.innerText = 'Paused';
        this.Submitbutton.innerText = 'Submit';
        this.Submitbutton.disabled = false;
    }


    // creates Submit button
    createButton()
    {
        // @kirzin - contributor
        // Create the button element
        // Add classes to the button element
        this.Submitbutton.classList.add('button');

        // Create the span element for button content
        var buttonContent = document.createElement('span');
        buttonContent.classList.add('button-content');
        buttonContent.textContent = 'Submit';

        // Append the button content span to the button element
        this.Submitbutton.appendChild(buttonContent);
    }

    // inserts all the button in the document
    insert_buttons()
    {
    // Find the target element to insert before
    const targetElement = document.querySelector('.flex-col.flex-1.transition-opacity.duration-500.overflow-y-auto');
    this.buttonDiv.appendChild(this.Submitbutton);
    this.buttonDiv.appendChild(this.pauseButton);
    
    // Insert button before the target element
    if (targetElement && targetElement.parentNode) {
    targetElement.parentNode.insertBefore(this.buttonDiv, targetElement);
    targetElement.parentNode.insertBefore(this.textarea, targetElement);
    targetElement.parentNode.insertBefore(this.website, targetElement);
    } 
    else {
    console.error('Target element not found.');
    }

    }

    applyButtonStyles()
    {
        var button = document.querySelector('.button');

        // Apply button styles
        button.style.textDecoration = 'none';
        button.style.position = 'relative';
        button.style.border = 'none';
        button.style.fontSize = '14px';
        button.style.fontFamily = 'inherit';
        button.style.color = '#fff';
        button.style.width = '9em';
        button.style.height = '2.5em';
        button.style.lineHeight = '2em';
        button.style.textAlign = 'center';
        button.style.background = 'linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4)';
        button.style.backgroundSize = '300%';
        button.style.borderRadius = '20px';
        button.style.zIndex = '1';
        button.style.margin = '5px 13px 0px 5px';

        // Gradient effect styles
        var gradientEffect = document.createElement('style');
        gradientEffect.innerHTML = `
        .button:hover {
        animation: ani 8s linear infinite;
        border: none;
        }

        @keyframes ani {
        0% {
            background-position: 0%;
        }

        100% {
            background-position: 400%;
        }
        }

        .button:before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        z-index: -1;
        background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
        background-size: 400%;
        border-radius: 20px;
        transition: 1s;
        }

        .button:hover::before {
        filter: blur(20px);
        }

        .button:active {
        background: linear-gradient(32deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
        }
        `;
        document.head.appendChild(gradientEffect);
    }

    applyChunkTextStyle()
    {
        const style_text = document.createElement('style');
        style_text.innerHTML = `.input-chunk {
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
            font-weight: 500;
            font-size: 1vw;
            color: #fff;
            background-color: rgb(28,28,30);
            box-shadow: 0 0 .4vw rgba(0,0,0,0.5), 0 0 0 .15vw transparent;
            border-radius: 0.4vw;
            border: none;
            outline: none;
            padding: 0.2vw ;
            max-width: 220px;
            transition: .4s;
            max-height: 40px;
        }
        
        .input-chunk:hover {
            box-shadow: 0 0 0 .15vw rgba(135, 207, 235, 0.186);
        }
        
        .input-chunk:focus {
            box-shadow: 0 0 0 .15vw skyblue;
        }`

        document.head.appendChild(style_text);
    }

    applyPauseStyle()
    {
        // Create the style element for the gradient effect
        var gradientEffect = document.createElement('style');
        gradientEffect.innerHTML = `
            .pause-button {
            padding: 9px 18px;
            border: unset;
            border-radius: 15px;
            color: #212121;
            z-index: 1;
            background: #e8e8e8;
            position: relative;
            font-weight: 1000;
            font-size: 17px;
            box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
            transition: all 250ms;
            overflow: hidden;
            }

            .pause-button::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0;
            border-radius: 15px;
            background-color: #212121;
            z-index: -1;
            box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
            transition: all 250ms;
            }

            .pause-button:hover {
            color: #e8e8e8;
            }

            .pause-button:hover::before {
            width: 100%;
            }
        `;

        // Append the style element to the document head
        document.head.appendChild(gradientEffect);

    }

    // functions to apply style to website and version
    applyVersionStyle()
    {
        var version_style = document.createElement("style");
        style.innerHTML = `
            .version_text 
            {
                font-size: 30px;
                font-family: "Lucida Console", "Courier New", monospace;
                margin: 10px;
            }
        `;
        document.head.appendChild(version_style);
    }

    applyWesbiteTextStyle()
    {
        var website_style = document.createElement("style");
        website_style.innerHTML = `
        .website_link
        {
            font-size: 18px;
            font-weight: 500;
            font-family: "Lucida Console", "Courier New", monospace;
            margin: 10px;
            margin-top: 2px;
            background-image: linear-gradient(90deg,#03a9f4,#f441a5);
            color: #fff;
            border-radius: 5px;
            padding-left: 5px;
        }
        `;
        document.head.appendChild(website_style);
    }

    disableButton() {
        this.Submitbutton.disabled = true;
        this.Submitbutton.innerText = 'Submitting..';
    }

    //function to update progress
    update_progress(current, total)
    {
        this.Submitbutton.innerText = `${current} / ${total}`;
    }

    //function to reload button
    reload_button()
    {
        this.Submitbutton.innerText = 'Submitting..';
    }

    enableButton() {
        this.Submitbutton.disabled = false;
        this.Submitbutton.innerText = 'Submit';
    }

    // load tesseract.min.js
    loadTes() {
        return new Promise((resolve, reject) => {
          const Tesscript = document.createElement('script');
          Tesscript.src = chrome.runtime.getURL("tesseract.min.js");
          Tesscript.onload = resolve;
          Tesscript.onerror = reject;
          document.head.appendChild(Tesscript);
        });
    }

    loadPdfjsDist() {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = chrome.runtime.getURL("pdf.worker.min.js");
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
    }

    submit()
    {   

        this.loadPdfjsDist();

        const delaySeconds = parseInt(this.textarea.value, 10) || 8;
        const chunkDelay = delaySeconds * 1000;
        this.textarea.innerText = delaySeconds;
        
        // Function to handle PDF file
        const handlePdfFile = async (file) => {
            const loadingTask = pdfjsLib.getDocument(URL.createObjectURL(file));
    
            try {
            const pdf = await loadingTask.promise;
            const numPages = pdf.numPages;
            let textContent = '';
    
            for (let i = 1; i <= numPages; i++) {
                const page = await pdf.getPage(i);
                const pageText = await page.getTextContent();
                const pageTextItems = pageText.items.map((item) => item.str);
    
                // Join text items of the current page with a newline character
                const pageContent = pageTextItems.join('\n');
    
                textContent += pageContent + '\n';
            }
    
            const fileSize = textContent.length;
            const chunkSize = 14000;
            const numChunks = Math.ceil(fileSize / chunkSize);
    
            for (let i = 0; (i < numChunks) && !this.isPaused; i++) {
    
                const start = i * chunkSize;
                const end = Math.min(start + chunkSize, fileSize);
                const chunk = textContent.slice(start, end)
    
                await new Promise((resolve) => {
                const part = i + 1;
                const filename = file.name;
                // Submit conversation
                this.submitConversation(chunk, part, filename);
                const progressBarWidth = ((i + 1) / numChunks) * 100;
    
                // Check if all chunks are submitted
                if (progressBarWidth === 100 || this.isPaused) {
                    // Enable the button
                    this.enableButton();
                    
                }
                if(!this.isPaused){
                    setTimeout(resolve, chunkDelay);}
                });
            }
            this.isPaused = false;
    
            // Enable the button
            this.reload_button();
            this.enableButton();
            } catch (error) {
            console.error('Error occurred while extracting PDF text:', error);
            this.reload_button();
            this.enableButton();
            }
        }


        //handle NON-PDF file
        const handleImageFile = (file) => {
            this.disableButton();
            this.loadTes();

            const reader = new FileReader();

            reader.onload = async (event) => {
                const imageData = event.target.result;

                // Use Tesseract to recognize text from the image
                const { data: { text } } = await Tesseract.recognize(imageData, 'eng', {});

                // Store the result text in a constant
                const resultText = text;

                // Submit conversation
                await this.submitConversation(resultText, 1, file.name);
                this.enableButton();
             };

            reader.readAsDataURL(file);
        }
        
        // Function to handle non-PDF file
        const handleNonPdfFile = async (file) => {

            if(file.type.includes('image/')){
                handleImageFile(file);
            }
            else{
    
            const reader = new FileReader();
            const fileSize = file.size;
            const chunkSize = 14000;
            const numChunks = Math.ceil(fileSize / chunkSize);
            this.disableButton();
    
            for (let i = 0; (i < numChunks) && !this.isPaused; i++)
            {
    
                const start = i * chunkSize;
                const end = Math.min(start + chunkSize, fileSize);
                const chunk = file.slice(start, end);
    
                reader.readAsText(chunk);
    
                await new Promise((resolve) => {
                    reader.onload = async (event) => {
                        const text = event.target.result;
                        const part = i + 1;
                        const filename = file.name;
    
                        // Submit conversation
                        await this.submitConversation(text, part, filename);
                        const progressBarWidth = ((i + 1) / numChunks) * 100;
    
                        // Check if all chunks are submitted
                        if (progressBarWidth === 100  || this.isPaused) {
                            // Enable the button
                            this.enableButton();
                        }
                    };
                if(!this.isPaused){
                setTimeout(resolve, chunkDelay);}
                });
            }
            this.isPaused = false;
            }
        }


        // File input change event handler
        const handleFileInputChange = (event) => {
            this.pauseButton.innerText = 'Pause';
            this.isPaused = false;
            const file = event.target.files[0];
            
            if (file.name.endsWith('.pdf')) {
            // Disable the button
            this.disableButton();
    
            // Handle PDF file
            handlePdfFile(file);
            } else {
            // Handle non-PDF file
            handleNonPdfFile(file);
            // end of else statement for image file
            }
        }

        // Create file input element
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.txt,.js,.py,.html,.css,.json,.csv,.pdf,.png,.jpeg,.jpg';
        fileInput.style.display = 'none';
        fileInput.addEventListener('change', handleFileInputChange);

        // Trigger file input click
        fileInput.click();

    }

    delay(ms)
    {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async submitConversation(text, part, filename) {
        const textarea = document.querySelector("textarea[tabindex='0']");
        const enterKeyEvent = new KeyboardEvent('keydown', {
          bubbles: true,
          cancelable: true,
          keyCode: 13,
        });
        
        // handles custom prompt
        var c_prompt = textarea.value;
        var custom_prompt = c_prompt.split(' ').slice(0, 100).join(" ");
        
        //make a different prompt for img files
        if (filename.endsWith('png') || filename.endsWith('jpg') || filename.endsWith('jpeg')){
            custom_prompt += 'The following image has text:'; 
        }

        // Clear existing text in the textarea
        textarea.value = '';
    
        var total = text.length
        textarea.value = `${custom_prompt} \nPart ${part} of ${filename}: \n\n`;
        // Iterate over each character in the text and simulate typing
        let i = 0;
        for (; i < 10; i++) {
          const character = text[i];
          await this.delay(20); // Adjust the delay between characters if needed
          this.update_progress(i+1, total);
          textarea.value += character;
          textarea.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event for reactive interfaces
        }
        this.update_progress(total, total);
        textarea.value = '';
        textarea.value = `${custom_prompt} \nPart ${part} of ${filename}: \n\n ${text}`;
        textarea.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event for reactive interfaces
    
        textarea.dispatchEvent(enterKeyEvent);
        await this.delay(1700);
        this.reload_button();
    }
}

const conversationSubmitter = new ConversationSubmitter();