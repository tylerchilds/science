require 'net/http'
require 'uri'
require 'json'
require 'date'

total = 0
taken = 0
File.open('results.txt', 'w') do |file|
  Date.new(2015, 04, 01).upto(Date.new(2017, 07, 18)) do |date|
    total += 1
    handle = date.strftime("%B%d%Y")

    uri = URI.parse("https://signup.live.com/API/CheckAvailableSigninNames?wa=wsignin1.0&rpsnv=13&ct=1500419401&rver=6.7.6643.0&wp=MBI_SSL_SHARED&wreply=https%3a%2f%2fmail.live.com%2fdefault.aspx&id=64855&cbcxt=mai&contextid=0A2E421779E2667C&bk=1500419401&uiflavor=web&uaid=58f490facaf44147b5400fc1a8d142ba&mkt=EN-US&lc=1033&lic=1")
    request = Net::HTTP::Post.new(uri)
    request.content_type = "application/x-www-form-urlencoded; charset=UTF-8"
    request["Pragma"] = "no-cache"
    request["Origin"] = "https://signup.live.com"
    request["Accept-Language"] = "en-US,en;q=0.8"
    request["User-Agent"] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
    request["Canary"] = "gPBYTEiVjD5BAkMmQzBUQZFMWR0SWCz3zy0J8WZwsEYQfpdhnrin9lzHnoX1LlcDtAIcnnDjfynUtn/Pu79hcnTjpJDZeM3itvGrNn4w5YBj9QyfZWo5HuoGIZRRTHPF+7SK2ub5ngmqvlQ7G7GbEUMOfvFNhDSZmDE+A15dr4C+xnYE0wbDHF8obT+Mb+3rLKpSxf340INrpI1M2GW9FV4Pdblbgt7kNHUzdlfof3wF/aSOqCZH+gumrS4NfD2f:1:3c"
    request["Accept"] = "application/json"
    request["Cache-Control"] = "no-cache"
    request["X-Requested-With"] = "XMLHttpRequest"
    request["Cookie"] = "AVC=v=1.43.1.1081&t=07/18/2017 23:14:44; mkt=en-US; wl_optintopcexperience=true; amsc=atfHcegurzfZlhNvxLV7dnaxUDoFLHSHACP1rSv8ekSjA+gGfYPkjcED2bRJPXGjJjlGevi39OZgAxAKmsxgj6zifgg7KwOdVbj4rhVQ0pEuqOy7jrMiOUzUd7EoPtciyYSSaFRo4Kvf2OiAX/VY1BnxVjUlFL5f5B/h9kvrAqC2kFwOB+h0hrqLjYRdzaa0pDsjVMz89ED12F8UxFQDZASMZ91WRk/Kf+33qNLMW5sXZCbad6WrdJbe47YWh0I/:1:3c; MC0=1500419687922; MSFPC=ID=4541a828498a284ebbeff274c198b442&CS=1&LV=201707&V=1; mkt1=en-US; DID=2190"
    request["Connection"] = "keep-alive"
    request["Referer"] = "https://signup.live.com/?wa=wsignin1.0&rpsnv=13&ct=1500419401&rver=6.7.6643.0&wp=MBI_SSL_SHARED&wreply=https%3a%2f%2fmail.live.com%2fdefault.aspx&id=64855&cbcxt=mai&contextid=0A2E421779E2667C&bk=1500419401&uiflavor=web&uaid=58f490facaf44147b5400fc1a8d142ba&mkt=EN-US&lc=1033&lic=1"
    request.body = JSON.dump({
      "signInName" => "#{handle}@hotmail.com",
      "uaid" => "58f490facaf44147b5400fc1a8d142ba",
      "includeSuggestions" => true,
      "firstName" => "",
      "lastName" => "",
      "uiflvr" => 1001,
      "scid" => 100118,
      "hpgid" => "Signup_MemberNamePage_Client",
      "tcxt" => "fGeypJ/54BcU+ojFMiKVJuPy6PT34M2AVlxn/PLHUCGbdyrq6M0viiKWepFiqiFSnBIdSJIfUfvR8yGC8iFTZHj1UIxM7dIOJ5Fe2V54vJVwjtpsNx7cXCFPqzZVSHrp8DJ8IbYKCgpTQCKCoWrdFgpxdszPeu0b1zbEDHfbAUHhvSZ6Zk2zeXgoORJFDuxk+GWddNPsSKr3/2BFTkjF92Sfl4f7jOL/rNrzMwdUNY31ijBQdrKiXF9hwgKu2jGz0s2raPdy1PeEsSupg8g+YDFTzsVopJpIPaU+AcA26gczDx/vTmmWgqnFUjMhm6MIAeJFpALLnNNUvLYJQAGKOw==:1:3"
    })

    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    if response.code == "200"
      available = JSON.parse(response.body)["isAvailable"]
      puts "#{handle}:#{available}"
      if available
        file.write("#{handle}\n")
      else
        taken += 1
      end
    else
      puts response.code
      puts JSON.parse(response.body)
      break
    end
  end

  result = "#{taken} unavailable out of #{total} checked. #{(taken/total)*100}%"
  puts result
  file.write("\n\n#{result}\n\n")
end
